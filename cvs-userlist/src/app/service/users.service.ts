import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  baseUrl = "https://reqres.in/api/users";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<All> {
    return this.http.get<All>(this.baseUrl);
  }
}

export interface All {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data?: (DataEntity)[] | undefined;
  support: Support;
}
export interface DataEntity {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
export interface Support {
  url: string;
  text: string;
}
