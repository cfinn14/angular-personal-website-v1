import { Component, OnInit, Input } from '@angular/core';
import { NQueensService } from '../services/n-queens.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'n-queens',
  templateUrl: './n-queens.component.html',
  styleUrls: ['./n-queens.component.css']
})
export class NQueensComponent implements OnInit {

  @Input()
  private n: number;

  constructor(nQueensService: NQueensService) { }

  ngOnInit() {

  }

  onClick() {
    
  }

}
