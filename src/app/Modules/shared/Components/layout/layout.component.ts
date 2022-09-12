import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  navBarMenu: any[] = [];
  constructor() {
    debugger
    this.menuList();
  }
  menuList() {
    this.navBarMenu =
      [
        {
          icons: 'home',
          menuName: 'Dashboard'
        },
        {
          icons: 'person icon',
          menuName: 'User List'
        }
      ]
  }
  ngOnInit(): void {
  }
  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

}
