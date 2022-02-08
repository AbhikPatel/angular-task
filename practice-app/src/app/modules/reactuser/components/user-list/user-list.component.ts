import { Component, OnInit } from '@angular/core';
import { User } from '../../models/reactuser.model';
import { TabledataService } from '../../services/tabledata.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userlist:User[];

  constructor(private ser: TabledataService) { }

  ngOnInit(): void {
    this.getuserbyser();

  }

  getuserbyser()
  {
    this.ser.getuser().subscribe(m => {
       this.userlist = m;
    })
  }

  deldata(id:number)
  {
    this.ser.delser(id).subscribe();
    this.getuserbyser()
  }
 

 
}
