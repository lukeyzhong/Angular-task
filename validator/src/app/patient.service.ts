import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private database: any[] = [
    {
      birthday: '1998-08-08',
      zipcode: 88888
    },
    {
      birthday: '1999-09-09',
      zipcode: 99999
    }
  ]


  constructor() { }

  validateInfo(data: any) {

    // for (let ele of this.database) {
    //   if (ele.birthday === data.birthday && ele.zipcode === data.zipcode) {
    //     return console.log('correct!');
    //   } 
    // }

    for (let ele of this.database) {
      if (JSON.stringify(ele) === JSON.stringify(data)) {
        return console.log('correct!');
      } 
    }


    // this.database.forEach((ele: any) => {
    //   if (ele.birthday === data.birthday && ele.zipcode === data.zipcode) {
    //     return console.log('correct!')
    //   } 
    // });
    return console.log('wrong!');
  }
}
