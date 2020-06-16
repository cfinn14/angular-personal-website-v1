import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NQueensService } from './n-queens/services/n-queens.service';
import { NQueensComponent } from './n-queens/components/n-queens.component';

import { RouterModule, Routes } from '@angular/router';
import { RecursionComponent } from './recursion/recursion.component';


const routes: Routes = [
  { path: '', component: RecursionComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    NQueensComponent,
    RouterModule
  ],
  declarations: [NQueensComponent, RecursionComponent],
  providers: [
    NQueensService
  ]
})
export class RecursionPracticeModule { }
