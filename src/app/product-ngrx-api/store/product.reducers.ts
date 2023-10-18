import { createReducer, on } from '@ngrx/store';
import * as productActions from './product.actions';
import { Product } from './product-service.component';

export interface ProductState {
  products: Product[];
  loading: boolean;
  error: any;
}

export const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

export const productReducer = createReducer(
  initialState,
  on(productActions.loadProducts, (state) => ({
    ...state,
    loading: true,
  })),
  on(productActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    loading: false,
  })),
  on(productActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
