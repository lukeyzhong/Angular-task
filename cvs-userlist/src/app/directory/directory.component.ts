import { Component, OnInit } from '@angular/core';
import { All, DataEntity, UsersService } from '../service/users.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  users: DataEntity[] | undefined = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((info: All) => {
      this.users = info.data;
    })
  }

}
