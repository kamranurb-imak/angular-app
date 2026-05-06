import { CommonModule } from '@angular/common';
import { inject, ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoListComponent {
  private cdr = inject(ChangeDetectorRef);

  taskId: number = 0;
  task: string = '';
  todoList: { id: number, task: string }[] = [];
  btnText: string = 'Add Task';

  addTask(): void {
    if (this.task.trim() === '') {
      return; // Do not add empty tasks
    }

    console.log('Add task event:', event);

    if (this.taskId) { // if taskId exist then edit task
      console.log('Editing task with id:', this.taskId);
      this.editTask();
      this.btnText = 'Add Task'; // Change button text back to "Add Task" after editing
      return;
    }
    else {
      const newTask = {
        id: this.todoList.length + 1, //this.todoList.length > 0 ? Math.max(...this.todoList.map(t => t.id)) + 1 : 1,
        task: this.task
      };
      this.todoList.push(newTask);
      this.cdr.detectChanges(); // Manually trigger change detection to update the view

      console.log('Task added:', newTask);
      console.log('Current todo list:', this.todoList);
      this.task = ''; // Clear input field after adding
      this.taskId = 0; // Reset taskId after adding
    }
  }

  selectTask(id: number, task: string): void {
    const taskIndex = this.todoList.findIndex(task => task.id === id);

    this.btnText = 'Edit Task'; // Change button text to "Edit Task" when a task is selected for editing
    this.task = task; // Set the input field to the current task value for editing
    this.taskId = id; // Store the id of the task being edited
  }

  editTask(): void {
    const taskIndex = this.todoList.findIndex(task => task.id === this.taskId);

    if (taskIndex !== -1) {
      this.todoList[taskIndex].task = this.task; // Update the task with the new value
      this.cdr.detectChanges(); // Manually trigger change detection to update the view

      console.log('Task edited with id:', this.taskId);
      console.log('Current todo list:', this.todoList);

      this.task = ''; // Clear input field after editing
      this.taskId = 0; // Reset taskId after editing
    }
  }

  deleteTask(id: number): void {
    this.todoList = this.todoList.filter(task => task.id !== id);
    this.cdr.detectChanges(); // Manually trigger change detection to update the view
    console.log('Task deleted with id:', id);
    console.log('Current todo list:', this.todoList);
  }


}
