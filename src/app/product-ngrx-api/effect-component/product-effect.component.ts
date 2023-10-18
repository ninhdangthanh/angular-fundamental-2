import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product, ProductService } from '../store/product-service.component';
import { loadProducts } from '../store/product.actions';
import { DataEffects } from './product.effect';

@Component({
  selector: 'app-product-effect',
  templateUrl: './product-effect.component.html',
})
export class ProductEffectComponent implements OnInit {
  productsState$: Observable<any>;
  products?: Product[];

  constructor(
    private store: Store<any>,
    private productService: ProductService,
  ) {
    this.store.dispatch(loadProducts());
    this.productsState$ = this.store.select('products');
    console.log("this.productsState$ 1");
    console.log("this.productsState$ ", this.productsState$);
    this.store.select('products').subscribe(data => console.log("data", data));

  }

  ngOnInit(): void {
  }
}
