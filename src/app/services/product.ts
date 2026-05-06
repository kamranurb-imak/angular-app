import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private httpclient = inject(HttpClient);

  private domainUrl = 'http://localhost:5004';
  private token = localStorage.getItem('token') || 'test-token-value';
  httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.token,
        'Content-Type': 'application/json'
      })
    };

  GetInventoryData(): Observable<productData[]> {
    console.log('Fetching inventory data with token:', this.token);
    let apiUrl = `${this.domainUrl}/api/inventory`;
    return this.httpclient.get<productData[]>(apiUrl);
  }

  SaveInventoryRecord(productData: productData): Observable<any> {
    let apiUrl = `${this.domainUrl}/api/inventory`;
    return this.httpclient.post(apiUrl, productData, this.httpOptions);
  }

  UpdateInventoryRecord(productData: productData) : Observable<any> {
    console.log('productData', productData)
    let apiUrl = `${this.domainUrl}/api/inventory/${productData.productId}`;
    let httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.token,
        'Content-Type': 'application/json'
      })
    };

    return this.httpclient.put(apiUrl, productData, httpOptions);
  }

  DeleteProduct(productId: any): Observable<boolean> {
    if (!confirm('Are you sure you want to delete this product?')) {
      return of(false); // Return an observable of false if the user cancels the deletion
    }

    console.log('Deleting product with ID:', productId);
    let apiUrl = `${this.domainUrl}/api/inventory/${productId}`;

    return this.httpclient.delete(apiUrl).pipe(
      map(() => true),
      catchError((error) => {
        console.error('Error deleting product:', error);
        return of(false);
      })
    );
  }
}
