import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentOneComponent } from './parent1/parent1.component';
import { ChildOneComponent } from './child1/child1.component';
import { ChildTwoComponent } from './child2/child2.component';
import { ParentTwoComponent } from './parent2/parent2.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'parent1',
    component: ParentOneComponent,
  },
  {
    path: 'parent2',
    component: ParentTwoComponent,
    children: [
      {
        path: 'child1',
        component: ChildOneComponent,
      },
      {
        path: 'child2',
        component: ChildTwoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
