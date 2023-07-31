import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  selected = false;

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)]),
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.contactForm.value);
    this.selected = true;

  }

  get name() {
    return this.contactForm.get('name')
  }

  get message() {
    return this.contactForm.get('message')
  }

}
