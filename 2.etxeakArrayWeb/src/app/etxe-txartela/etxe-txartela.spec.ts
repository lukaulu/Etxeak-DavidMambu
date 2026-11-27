import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EtxeTxartela } from './etxe-txartela';

describe('EtxeTxartela', () => {
  let component: EtxeTxartela;
  let fixture: ComponentFixture<EtxeTxartela>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtxeTxartela],
    }).compileComponents();

    fixture = TestBed.createComponent(EtxeTxartela);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
