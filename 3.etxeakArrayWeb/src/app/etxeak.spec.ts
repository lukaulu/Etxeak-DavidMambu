import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Etxeak } from './etxeak';

describe('Etxeak', () => {
  let service: Etxeak;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideHttpClient(), provideHttpClientTesting()] });
    service = TestBed.inject(Etxeak);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
