import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddCategoryComponent } from '../add-category/add-category.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userName: any;
  constructor(  private formBuilder:FormBuilder, public dialog:MatDialog) {
    this.userName = JSON.parse(sessionStorage.getItem('user')!);
  }

  ngOnInit(): void {
  }
  addInfo(): void {
 const dialogRef = this.dialog.open(AddCategoryComponent, {
      width: '600px', 
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
    });
  
  }

}
