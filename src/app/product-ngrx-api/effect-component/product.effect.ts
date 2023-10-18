import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { ProductService } from '../store/product-service.component';
import { loadProducts, loadProductsFailure, loadProductsSuccess } from '../store/product.actions';


@Injectable()
export class DataEffects {
  constructor(private actions: Actions, private productService: ProductService) {}

  loadData$ = createEffect(() =>
    this.actions.pipe(
      ofType(loadProducts),
      switchMap(() =>
        this.productService.getProducts().pipe(
          map((data) => loadProductsSuccess({ products: data.body })),
          catchError((error) => of(loadProductsFailure({ error })))
        )
      )
    )
  );
}
