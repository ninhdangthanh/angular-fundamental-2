import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ParentOneComponent } from './parent1/parent1.component';
import { ParentTwoComponent } from './parent2/parent2.component';
import { ChildOneComponent } from './child1/child1.component';
import { ChildTwoComponent } from './child2/child2.component';
import { AnimationComponent } from './animation/animation.component';
import { todoReducer } from './todo-list-not-api/store/todo.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducer } from './todo-list-not-api/store/store';
import { TodoListComponent } from './todo-list-not-api/todo-list.component';
import { FormsModule } from '@angular/forms';
import { productReducer } from './product-ngrx-api/store/product.reducers';
import { ProductListComponent } from './product-ngrx-api/product.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductEffectComponent } from './product-ngrx-api/effect-component/product-effect.component';
import { DataEffects } from './product-ngrx-api/effect-component/product.effect';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParentOneComponent,
    ParentTwoComponent,
    ChildOneComponent,
    ChildTwoComponent,
    AnimationComponent,
    TodoListComponent,
    ProductListComponent,
    ProductEffectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({todos: todoReducer, products: productReducer}),
    EffectsModule.forRoot([DataEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
