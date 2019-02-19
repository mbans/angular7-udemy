import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/order.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit, OnDestroy, AfterViewInit {

  displayedColumns = ['username', 'datePlaced', 'view'];
  dataSource: MatTableDataSource<Order>;
  orders$;
  orders: Order[];
  subsription: Subscription;

  // TODO: Look this up and understand what these do
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private orderServivce: OrderService) {
    this.subsription = this.orderServivce.getOrders()
                          .subscribe(orders => {
                            this.orders = orders;
                            this.dataSource.data = orders;
                            console.log('Returning ' + orders.length + ' orderss');
                          });
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
