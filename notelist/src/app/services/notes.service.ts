import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Note } from '../note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  
  notesChanged$ = new Subject<Note[]>();

  private notes: Note[] = [
    // new Note('Note1', 'this is my note1'),
  ];

  constructor() { }

  getNotes() {
    return this.notes;
  }

  getNote(index: number) {
    return this.notes[index];
  }

  addNote(note: Note) {
    this.notes.push(note);
    this.notesChanged$.next(this.notes.slice());
  }

  updateNote(index: number, newNote: Note) {
    this.notes[index] = newNote;
    this.notesChanged$.next(this.notes.slice());
  }

  deleteNote(index: number) {
    this.notes.splice(index, 1);
    this.notesChanged$.next(this.notes.slice());
  }
}
