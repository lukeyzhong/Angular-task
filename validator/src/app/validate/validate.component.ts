import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent implements OnInit {

  title = "abc";
  form!: FormGroup;

  get birthday() {
    return this.form.get('birthday');
  }

  get zipcode() {
    return this.form.get('zipcode');
  }

  constructor(
    private fb: FormBuilder,
    private patientService: PatientService,
    private store: Store) { }

  ngOnInit(): void {
    this.form = this.fb.group(this.buildform());
  }

  buildform(): {} {
    return {
      birthday: ['', [Validators.required]],
      zipcode: ['', [Validators.required]]
    };
  }

  onSubmit() {
   console.log(this.form.value);
   
   this.patientService.validateInfo(this.form.value);
  }

}
