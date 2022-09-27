import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.scss']
})
export class TodoitemComponent implements OnInit {
  @Input() todoitem!: Todo;
  @Output() deleteId = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    this.deleteId.emit(this.todoitem.id);
  }

}
