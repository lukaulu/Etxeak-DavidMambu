import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EtxeXehetasuna } from './etxe-xehetasuna';

describe('EtxeXehetasuna', () => {
  let component: EtxeXehetasuna;
  let fixture: ComponentFixture<EtxeXehetasuna>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtxeXehetasuna],
    }).compileComponents();

    fixture = TestBed.createComponent(EtxeXehetasuna);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
