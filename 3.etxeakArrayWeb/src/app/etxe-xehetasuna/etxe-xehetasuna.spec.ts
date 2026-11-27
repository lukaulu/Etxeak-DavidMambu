import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EtxeXehetasuna } from './etxe-xehetasuna';

describe('EtxeXehetasuna', () => {
  let component: EtxeXehetasuna;
  let fixture: ComponentFixture<EtxeXehetasuna>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
      imports: [EtxeXehetasuna],
    }).compileComponents();

    fixture = TestBed.createComponent(EtxeXehetasuna);
    fixture.componentRef.setInput('id', '0');
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
