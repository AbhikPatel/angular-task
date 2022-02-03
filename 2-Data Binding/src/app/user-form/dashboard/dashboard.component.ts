import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  buttonName: string = "Add User";
  pathName: string = "userform";
  isAdminView: boolean = true;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  changeButtonName() {
    this.isAdminView = !this.isAdminView;
    if (this.isAdminView) {
      this.buttonName = "Add User";
      this.router.navigate(['userform/list']);
    } else {
      this.buttonName = "Back to Lists";
      this.router.navigate(['userform/add']);
    }
  }

}
