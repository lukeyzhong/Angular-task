import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from '../todo.service';
import { FormsModule } from '@angular/forms'
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  todos: any[] = [];
  inputTodo: string = '';
  todoService = inject(TodoService);

  ngOnInit(): void {
    // this.todoService.getTodos().subscribe();
    // this.todos$ = this.todoService.todos$;
  }

  deletetodo(id: any) {
    // this.todolist = this.todolist.filter((ele: any) => +ele.id !== +id);
    // this.todoService.deleteTodo(id).subscribe();
  }

  addtodo(input: string) {
    // const newtodo: any = {
    //   userId: 101,
    //   title: input,
    // };
    // this.todoService.addTodo(newtodo).subscribe();
    // this.inputTodo = '';
  }

}
