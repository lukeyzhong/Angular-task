import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Note } from '../note.model';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  notes!: Note[];
  subscription$!: Subscription;

  constructor(private notesService: NotesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription$ = this.notesService.notesChanged
      .subscribe(
        (data: Note[]) => {
          this.notes = data;
        }
      );
    this.notes = this.notesService.getNotes();
  }

  onNewNote() {
    this.router.navigate(['add'],  {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }



}
