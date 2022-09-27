import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  todolist: Todo[] = [];
  inputTodo: string = '';

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((data)=>{
      this.todolist = data;
    })
  }

  deletetodo(id: string){
    this.todolist = this.todolist.filter((ele: any) => +ele.id !== +id);
    this.todoService.deleteTodo(id).subscribe();
  } 

  addtodo(input: string) {
    const newtodo: any = {
      userId: 101,
      title: input,
    };

    this.todoService.addTodo(newtodo).subscribe((data) => {
      this.todolist = [data, ...this.todolist];
    });

    this.inputTodo = '';
  }

}
