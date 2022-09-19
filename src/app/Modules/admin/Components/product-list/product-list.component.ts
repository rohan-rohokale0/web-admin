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
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}

  isLoading = false;
  totalRows = 0;
  pageSize = 5;
  currentPage = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // displayedColumns: any[] = ['id', 'ProductName', 'Category', 'Price', 'Action'];
  // dataSource: MatTableDataSource<USER> = new MatTableDataSource();

  // @ViewChild(MatPaginator) paginator: any;

  // constructor(private http: HttpClient, private router: Router) {

  // }
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

  // ngOnInit(): void {
  //   this.loadData();
  // }

  // loadData() {
  //   this.isLoading = true;
  //   this.http.get('https://jsonplaceholder.typicode.com/users')
  //     .subscribe((users: any) => {
  //       this.dataSource.data = users.rows;
  //       this.dataSource = new MatTableDataSource(users);
  //       debugger
  //       setTimeout(() => {
  //         debugger
  //         this.paginator.pageIndex = this.currentPage;
  //         this.paginator.length = users.length;
  //       });
  //       this.isLoading = false;
  //     }, error => {
  //       this.isLoading = false;
  //     }
  //     );
  // }

  // pageChanged(event: PageEvent) {
  //   console.log({ event });
  //   this.pageSize = event.pageSize;
  //   this.currentPage = event.pageIndex;
  //   this.loadData();
  // }
  // addProduct() {
  //   this.router.navigate(['/admin/add-product']);
  // }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  addProduct() {
    this.router.navigate(['admin/product/add']);
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
