import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeroesComponent } from './modules/hero/components/heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './modules/hero/components/hero-detail/hero-detail.component';
import { MessagesComponent } from './modules/message/components/messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './modules/dashboard/components/dashboard/dashboard.component';
import { RecursionPracticeModule } from '@modules/recursion-practice/recursion-practice.module';
import { NQueensComponent } from '@modules/recursion-practice/n-queens/components/n-queens.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FormsModule, AppRoutingModule, RecursionPracticeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
