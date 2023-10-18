import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadProductsSuccess, loadProductsFailure, loadProducts } from './store/product.actions';
import { Product, ProductService } from './store/product-service.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  productsState$: Observable<any> = this.store.select('products');
  products?: Product[];

  constructor(
    private store: Store<any>,
    private productService: ProductService
  ) {
    this.store.dispatch(loadProducts());
    this.productService.getProducts().subscribe(
      response => {
        this.store.dispatch(loadProductsSuccess({ products: response.body }));

      },
      (error) => {
        this.store.dispatch(loadProductsFailure({ error }));
      }
    );
  }

  ngOnInit(): void {
    console.log("productsState$ ", this.productsState$);

    this.store.select('products').subscribe(response => {
      console.log("response", response.products);
      this.products = response.products
    })
  }
}
