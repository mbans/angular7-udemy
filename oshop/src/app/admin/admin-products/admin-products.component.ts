import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/models/product';
import { MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy, AfterViewInit {


  // products: Product[];
  displayedColumns = ['title', 'price', 'category', 'edit'];
  dataSource: MatTableDataSource<Product>;

  // TODO: Look this up and understand what these do
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  products: Product[];
  // filterProducts: any[];
  subsription: Subscription;

  // dtTrigger: Subject = new Subject();
  constructor(private productService: ProductService) {
    this.subsription = this.productService.getAll()
                          .subscribe(products => {
                            // this.filterProducts = products;
                            this.products = products;
                            this.dataSource.data = products;
                            console.log('Returning ' + products.length + ' products');
                          });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();         // Remove whitespace
    filterValue = filterValue.toLowerCase();  // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
  }

  /*
   * TODO: Learn about this
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
   this.dataSource.paginator = this.paginator;
   this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {
    this.subsription.unsubscribe();
  }
}
