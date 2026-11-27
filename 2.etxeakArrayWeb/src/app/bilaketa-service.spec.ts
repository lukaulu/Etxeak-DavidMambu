import { TestBed } from '@angular/core/testing';
import { BilaketaService } from './bilaketa-service';

describe('BilaketaService', () => {
  let service: BilaketaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BilaketaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
