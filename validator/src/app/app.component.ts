import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from './patient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
    private patientService: PatientService) { }

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

