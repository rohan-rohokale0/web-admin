import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timelist',
  templateUrl: './timelist.component.html',
  styleUrls: ['./timelist.component.scss']
})
export class TimelistComponent implements OnInit {
  @Input() customers: any;
  constructor() { }

  ngOnInit(): void {
  }

}
