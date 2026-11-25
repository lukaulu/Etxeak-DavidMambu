import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bilatzailea } from './bilatzailea';


describe('Bilatzailea', () => {
  let component: Bilatzailea;
  let fixture: ComponentFixture<Bilatzailea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bilatzailea],
    }).compileComponents();

    fixture = TestBed.createComponent(Bilatzailea);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
