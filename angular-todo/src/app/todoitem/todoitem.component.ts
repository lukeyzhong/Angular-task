import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.scss']
})
export class TodoitemComponent implements OnInit {
  @Input() todoitem: any;
  @Output() deleteId = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    this.deleteId.emit(this.todoitem.id);
  }

}
