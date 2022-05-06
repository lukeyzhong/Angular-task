
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private database: any[] = [
    {
      userInput: {
        birthday: '1999-09-09',
        zipcode: 99999
      },
      appointmentDetails: {
        address: 'This Road, Apt 1',
        appointmentDateTime: '5: 00 pm',
        appointmentType: 'A',
        city: 'OK',
        clinicId: 'A1234',
        email: 'abc@gmail.com',
        firstName: 'Joe',
        lastName: 'Hoff',
        phoneNumber: '1231234',
        state: 'OK',
        zipCode: '73160',
      }
    },

  ]


  constructor(private route: Router) { }

  validateInfo(value: any) {

    // for (let ele of this.database) {
    //   if (ele.birthday === data.birthday && ele.zipcode === data.zipcode) {
    //     return console.log('correct!');
    //   } 
    // }

    for (let data of this.database) {
      if (JSON.stringify(value) === JSON.stringify(data.userInput)) {
        return this.route.navigateByUrl("verify");
      }
    }
    return alert("please enter correct info!");

  }
}
