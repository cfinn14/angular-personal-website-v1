import { Component, Input } from '@angular/core';
import {trigger, style, state, animate, transition} from '@angular/animations';
import { Hero } from './heroes/hero'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = `A<br>Little<br>Finnegan`;
  descriptionMain = 'This is a work in progress for the time being.  The main goal is for me to learn more about front end development.'
  
  show = false;

  constructor() { }

  get stateName() {
    return this.show ? 'show' : 'hide'
  }

}
