import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EtxeZerrenda } from './etxe-zerrenda';

describe('EtxeZerrenda', () => {
  let component: EtxeZerrenda;
  let fixture: ComponentFixture<EtxeZerrenda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
      imports: [EtxeZerrenda],
    }).compileComponents();

    fixture = TestBed.createComponent(EtxeZerrenda);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
