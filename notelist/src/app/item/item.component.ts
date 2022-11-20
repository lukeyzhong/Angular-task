import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Note } from '../note.model';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() index!: number;
  @Input() note!: Note;
  id!: number;

  constructor(private notesService: NotesService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
      }
    )
  }

  onDeleteNote(i: number) {
    console.log(i);
    this.notesService.deleteNote(i);
  }

}
