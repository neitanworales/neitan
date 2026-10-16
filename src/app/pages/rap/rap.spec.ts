import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rap } from './rap';

describe('Rap', () => {
  let component: Rap;
  let fixture: ComponentFixture<Rap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
