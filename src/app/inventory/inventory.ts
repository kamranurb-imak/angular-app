import { Component, inject, OnInit, ChangeDetectorRef, booleanAttribute } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './inventory.html',
  styleUrl: './inventory.css',
})
export class InventoryComponent implements OnInit {
  private httpclient = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);
  private productService = inject(ProductService);

  token = localStorage.getItem('token') || 'test-token-value';
  inventoryDto: productData[] = [];
  inventoryData: productData = {} as productData;

  ngOnInit(): void {
    this.GetInventoryData();
  }

  //call api get method to fetch inventory data and populate inventoryData object
  private GetInventoryData(): void {
    this.productService.GetInventoryData().subscribe(data => {
      this.inventoryDto = data;
      this.cdr.detectChanges(); // Manually trigger change detection
      console.log('Inventory data fetched successfully:', data);
    }, error => {
      console.error('Error fetching inventory data:', error);
      alert('Failed to fetch inventory data. Please check your connection and token.');
    });
  }

  onDelete(productId: any): void {
    this.productService.DeleteProduct(productId).subscribe(deleted => {
      if (deleted) {
        console.log('Product deleted successfully');
        this.cdr.detectChanges(); // Manually trigger change detection
        this.GetInventoryData();  // Refresh inventory list after deletion
      } else {
        alert('Failed to delete product. Please check your connection and token.');
      }
    }, error => {
      console.error('Error deleting product:', error);
      alert('Failed to delete product. Please check your connection and token.');
    });
  }

  onEdit(item: any): void {
    // Populate form with existing data for editing
    this.inventoryData = { ...item };
    // this.inventoryData = { ...item, productName: 'New Name' };
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top where the form is located
  }

  onSubmit(form: any): void {
    // Validate form before submission
    if (!form.valid) {
      console.warn('Form is invalid');
      return;
    }

    if (this.inventoryData.productId && this.inventoryData.productId > 0)
      this.UpdateInventoryRecord(form); // Update existing product
    else
      this.SaveInventoryRecord(form); // Save new product
  }

  private SaveInventoryRecord(form: any) {
    console.log('this.inventoryData', this.inventoryData)
    this.productService.SaveInventoryRecord(this.inventoryData).subscribe({
      next: (response) => {
        console.log('Product added successfully', response);
        form.resetForm(); // Reset form after successful submission
        this.GetInventoryData(); // Reload inventory list
      },
      error: (error) => {
        console.error('Error adding product', error);
        alert('Failed to add product. Please check your connection and token.');
      },
      complete: () => {
        console.log('Request completed');
      }
    });
  }

  private UpdateInventoryRecord(form: any) {
    this.productService.UpdateInventoryRecord(this.inventoryData).subscribe({
      next: (response) => {
        console.log('Product updated successfully', response);
        form.resetForm(); // Reset form after successful submission
        this.GetInventoryData(); // Reload inventory list
      },
      error: (error) => {
        console.error('Error updating product', error);
        alert('Failed to update product. Please check your connection and token.');
      },
      complete: () => {
        console.log('Request completed');
      }
    });
  }
}
