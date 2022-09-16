import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

interface USER {
  id: string;
  ProductName: string;
  Category: string;
  Price: string;
  Action: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  ELEMENT_DATA: USER[] = [];
  isLoading = false;
  totalRows = 0;
  pageSize = 5;
  currentPage = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  displayedColumns: any[] = ['id', 'ProductName', 'Category', 'Price', 'Action'];
  dataSource: MatTableDataSource<USER> = new MatTableDataSource();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private http: HttpClient, private router: Router) {

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.isLoading = true;
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe((users: any) => {
        this.dataSource.data = users.rows;
        this.dataSource = new MatTableDataSource(users);
        debugger
        setTimeout(() => {
          debugger
          this.paginator.pageIndex = this.currentPage;
          this.paginator.length = users.length;
        });
        this.isLoading = false;
      }, error => {
        this.isLoading = false;
      }
      );
  }

  pageChanged(event: PageEvent) {
    console.log({ event });
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.loadData();
  }
  addProduct() {
    this.router.navigate(['/admin/add-product']);
  }
}
