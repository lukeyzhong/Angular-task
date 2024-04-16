import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { TodosStore } from './store/todos.store';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodolistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  store = inject(TodosStore);

  ngOnInit(): void {
    // the store will auto turn every single property to signal
    // this.store.todos()

  }

  // loadTodos() {
  //   this.store.loadAll();
  // }
}
