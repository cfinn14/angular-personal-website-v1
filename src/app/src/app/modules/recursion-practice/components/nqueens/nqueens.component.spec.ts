import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NQueensComponent } from './nqueens.component';

describe('NQueensComponent', () => {
  let component: NQueensComponent;
  let fixture: ComponentFixture<NQueensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NQueensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NQueensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
