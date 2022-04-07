import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy {
  id!: number;
  editMode = false;
  noteForm!: FormGroup;
  subscription1$ = new Subscription();
  subscription2$ = new Subscription();

  constructor(private notesService: NotesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.subscription1$ = this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          // this.editMode = params['id'] != null;
          this.editMode = params['id'];
          this.initForm();
        }
      );
  }

  ngOnDestroy(): void {
    this.subscription1$.unsubscribe();
    this.subscription2$.unsubscribe();
  }

  onRevert() {
    this.router.navigate([this.subscription2$ = this.route.params.subscribe((data: any)=>console.log(data))], {relativeTo: this.route});
    alert("the note has been reverted!");

  }

  onSubmit() {
    if (this.editMode) {
      this.notesService.updateNote(this.id, this.noteForm.value);
      alert("the note has been updated!");
    } else {
      this.notesService.addNote(this.noteForm.value);
      alert("the note has been added!");
    }
  }

  private initForm() {
    let noteName = '';
    let noteDescription = '';

    if (this.editMode) {
      const note = this.notesService.getNote(this.id);
      noteName = note.name;
      noteDescription = note.description;
    }
    this.noteForm = new FormGroup({
      'name': new FormControl(noteName, Validators.required),
      'description': new FormControl(noteDescription, Validators.required),
    });
  }

}

