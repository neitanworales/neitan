import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Footer } from './footer';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the current year and navigation links', () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('.copyright')?.textContent).toContain(String(new Date().getFullYear()));
    expect(Array.from(element.querySelectorAll('nav a')).map(link => link.getAttribute('href'))).toEqual([
      '/home',
      '/projects',
      'https://rap.neitanworales.com'
    ]);
  });
});
