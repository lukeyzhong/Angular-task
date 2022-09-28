import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  // todolist: Todo[] = [];
  inputTodo: string = '';
  // todos$!: Observable<any>;


  constructor(public todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe();
    // this.todos$ = this.todoService.todos$;
  }

  deletetodo(id: string) {
    // this.todolist = this.todolist.filter((ele: any) => +ele.id !== +id);
    this.todoService.deleteTodo(id).subscribe();
  }

  addtodo(input: string) {
    const newtodo: any = {
      userId: 101,
      title: input,
    };
    this.todoService.addTodo(newtodo).subscribe();
    this.inputTodo = '';
  }
}
