import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FirestoreService } from 'src/app/Modules/shared/Services/firestore.service';
import { ExportService } from '../../Services/export.service';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { Router } from '@angular/router';

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
  customers: any = [];
  RouterLink='';
  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private exportService:ExportService,
    private firestoreService: FirestoreService,
   private  router: Router
    
  ) {
    router.events.subscribe((url:any) => console.log(url));
    console.log(router.url); 
    debugger
  }

  ngOnInit(): void {
    this.getBasicDetails();
    for (let i = 0; i <= 25; i++) {
      this.customers.push({firstName: `first${i}`, lastName: `last${i}`,
      email: `abc${i}@gmail.com`, address: `000${i} street city, ST`, zipcode: `0000${i}`});
    }
  }
  addInfo(): void {
    const dialogRef = this.dialog.open(AddCategoryComponent, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
    });
  }
  export() {
    this.exportService.exportExcel(this.customers, 'customers');
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
