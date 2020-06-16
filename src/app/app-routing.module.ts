import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from '@modules/hero/components/heroes/heroes.component';
import { DashboardComponent } from '@modules/dashboard/components/dashboard/dashboard.component';
import { HeroDetailComponent } from '@modules/hero/components/hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'nQueens', loadChildren: '@modules/recursion-practice/recursion-practice.module#RecursionPracticeModule'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
