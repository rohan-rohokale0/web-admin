import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { elementAt } from 'rxjs';
import { FirestoreService } from 'src/app/Modules/shared/Services/firestore.service';
import { AddCategoryComponent } from '../add-category/add-category.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  collectionPath = '';
  user: any;
  categoryList: any[] = [];
  CategoryListComponent: any;
  constructor(
    private router: Router,
    public dialog: MatDialog,
    private firestoreService: FirestoreService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private firestore: AngularFirestore
  ) {
    this.user = JSON.parse(sessionStorage.getItem('users')!);
    this.collectionPath = 'Owner' + '/' + this.user.id + '/' + 'Category';
  }
  ngOnInit(): void {
    this.getCategoryList();
  }

  isLoading = false;
  totalRows = 0;
  pageSize = 5;
  currentPage = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  displayedColumns: string[] = ['name', 'action'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {}

  addCategory(): void {
    const dialogRef = this.dialog.open(AddCategoryComponent, {
      width: '400px',
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      this.getCategoryList();
    });
  }

  getCategoryList() {
    debugger;
    this.firestore
      .collection(this.collectionPath, (ref) =>
        ref.limit(10).orderBy('createdAt', 'desc')
      )
      .get()
      .subscribe(
        (response) => {
          for (const item of response.docs) {
            const docData: any = item.data();
            docData.id = item.id;
            this.categoryList.push(docData);
          }
          this.dataSource = this.categoryList;
          this.dataSource.paginator = this.paginator;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  nextCategoryList() {
    const startAfter =
      this.categoryList[this.categoryList.length - 1].createdAt;
    if (this.categoryList.length % 6 === 0) {
      this.firestore
        .collection(this.collectionPath, (ref) =>
          ref.orderBy('createdAt', 'desc').startAfter(startAfter)
        )
        .get()
        .subscribe((response) => {
          for (const item of response.docs) {
            const docData: any = item.data();
            docData.id = item.id;
            this.categoryList.push(docData);
          }
          // this.ktGridComponent.refreshList();
        });
    }
  }
  editCategory(id: any) {
    console.log(id);
  }
  deleteCategory(id: any) {
    this.firestoreService
      .deleteCollectionDataById(this.collectionPath, id)
      .then((result) => {
        this.toastr.success('Category deleted successfully.');
        this.getCategoryList();
      });
  }
}

export interface PeriodicElement {
  name: string;
  action: any;
}
