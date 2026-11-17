import { TestBed } from '@angular/core/testing';
import { Etxeak } from './etxeak';

describe('Etxeak', () => {
  let service: Etxeak;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Etxeak);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
