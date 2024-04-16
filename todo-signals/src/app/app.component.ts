import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoStore } from './store/todos.store';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodolistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  todoStore = inject(TodoStore);

  ngOnInit(): void {
    // console.log(112);
    // this.todoStore.loadAll();
    // console.log(this.todoStore.todos());
  }

}
