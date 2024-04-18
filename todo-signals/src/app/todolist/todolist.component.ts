import { Component, ElementRef, KeyValueChanges, Signal, effect, inject, signal, viewChild } from '@angular/core';
import { TodoService } from './todo.service';
import { FormsModule } from '@angular/forms'
import { AsyncPipe, NgClass, NgFor } from '@angular/common';
import { Todo } from './todo.model';
import { Observable } from 'rxjs';
import { TodoStore, TodosFilter } from '../store/todos.store';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [FormsModule, NgFor, AsyncPipe, NgClass],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  todoService = inject(TodoService);
  todoStore = inject(TodoStore);

  inputTodo: string = '';
  // todos$!: Observable<any>;

  filterTag = viewChild.required<ElementRef>('filtering');

  constructor() {
    effect(() => {
      const filter = this.filterTag();
      filter.nativeElement.value = this.todoStore.filter();
    })
  }

  ngOnInit(): void {
    // this.todoService.getTodos().subscribe();
    // this.todos = this.todoService.todolistS
    this.todoStore.loadAll();
  }

  // deletetodo(id: any) {
  //   this.todoService.deleteTodo(id).subscribe();
  // }

  addtodo(input: string) {
    this.todoStore.addTodo(input)
    this.inputTodo = '';
  }

  toggleTodo(id: any, completed: boolean) {
    completed = !completed;
    console.log(completed);
    this.todoStore.updateTodo(id, completed);
  }

  onFilter(event: Event) {
    const filter = (event.target as HTMLSelectElement).value as TodosFilter
    this.todoStore.udpateFilter(filter);
  }

}
