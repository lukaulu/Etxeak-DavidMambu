import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EtxeTxartela } from './etxe-txartela';

describe('EtxeTxartela', () => {
  let component: EtxeTxartela;
  let fixture: ComponentFixture<EtxeTxartela>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtxeTxartela],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(EtxeTxartela);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('etxea', { id: '0', name: 'Proba', city: 'Bilbo', state: 'BI', photo: 'etxea0.jpg', availableUnits: 1, wifi: true, laundry: true });
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
