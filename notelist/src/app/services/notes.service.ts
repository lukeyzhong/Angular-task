import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Note } from '../note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  
  notesChanged$ = new Subject<Note[]>();

  private notes: Note[] = [];

  constructor() { }

  getNotes() {
    return this.notesChanged$;
  }

  getNote(index: number) {
    return this.notes[index];
  }

  addNote(note: Note) {
    this.notes.push(note);
    this.notesChanged$.next(this.notes);
  }

  updateNote(index: number, newNote: Note) {
    this.notes[index] = newNote;
    this.notesChanged$.next(this.notes);
  }

  deleteNote(index: number) {
    this.notes = this.notes.filter((_, i) => i !== index );
    this.notesChanged$.next(this.notes);
  }
}
