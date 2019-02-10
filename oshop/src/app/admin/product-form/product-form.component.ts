import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product = {};

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService) {
    this.categories$ = categoryService.getCategories();

    // the route for this component is /product/:id - this portion pulls out the id part for us
    // if it is set then we will go and retrieve the product from firebase and set it to the current 'product'
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      // the 'take' operator will take 1 element from the observable and then destroy it
      // we only expect the obs to omit one item
      this.productService.get(id).pipe(
        take(1)
      )
      .subscribe(p => {
        this.product = p;
        console.log('Retrieved p=' + JSON.stringify(p));
      });
    }

  }

  save(product) {
    this.productService.create(product);
    this.router.navigate(['/admin/products']); // redirect to the list of products
  }

  ngOnInit() {
  }

}
