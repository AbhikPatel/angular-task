import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  Users:User[] = [];

  constructor(private service: UserServiceService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers()
  {
    this.service.getAllUser().subscribe((data) => {
      this.Users = data;
    })
  }

  del(id:number)
  {
    this.service.delete(id).subscribe(() => {
      alert("ye delete ho chuka");
      this.getUsers();
    })
  }
}
