import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userName: any;
  constructor() {
    this.userName = JSON.parse(sessionStorage.getItem('user')!);
  }

  ngOnInit(): void {
  }

}
