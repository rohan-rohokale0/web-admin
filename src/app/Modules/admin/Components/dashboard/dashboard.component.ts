import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FirestoreService } from 'src/app/Modules/shared/Services/firestore.service';
import { AddCategoryComponent } from '../add-category/add-category.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  userName: any;
  panelOpenState = false;
  collectionPath = '';
  usersDetails: any;
  BasicDetails: any;
  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private firestoreService: FirestoreService
  ) {
    this.userName = JSON.parse(sessionStorage.getItem('user')!);
    this.usersDetails = JSON.parse(localStorage.getItem('user')!);
    console.log(this.usersDetails.uid);
    this.collectionPath =
      'Owner' +
      '/' +
      this.usersDetails.uid +
      '/' +
      'BasicInfromation' +
      '/' +
      this.usersDetails.uid;
  }

  ngOnInit(): void {
    this.getBasicDetails();
  }
  addInfo(): void {
    const dialogRef = this.dialog.open(AddCategoryComponent, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
    });
  }
  getBasicDetails() {
    const that = this;
    const details = [];
    that.firestoreService
      .getCollectionData(this.collectionPath).subscribe(doc=>
        {
          if(doc && doc.exists)
          {
            this.BasicDetails = doc.data();
          }
        })
  }
}
