import { TestBed, inject } from '@angular/core/testing';

import { NQueensService } from './n-queens.service';

describe('NQueensService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NQueensService]
    });
  });

  it('should be created', inject([NQueensService], (service: NQueensService) => {
    expect(service).toBeTruthy();
  }));
});
