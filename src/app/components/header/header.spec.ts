import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';

import { Header } from './header';
import { routes } from '../../app.routes';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter(routes)]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the active link when navigating and clicking links', async () => {
    const router = TestBed.inject(Router);
    await router.navigateByUrl('/home');
    await fixture.whenStable();

    const links = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll<HTMLAnchorElement>('nav a:not([target])')
    );

    expect(links[0].classList.contains('active')).toBe(true);
    expect(links[0].getAttribute('aria-current')).toBe('page');

    for (const selectedLink of [links[1], links[0]]) {
      selectedLink.click();
      await fixture.whenStable();

      expect(router.url).toBe(selectedLink.getAttribute('href'));
      for (const link of links) {
        expect(link.classList.contains('active')).toBe(link === selectedLink);
        expect(link.getAttribute('aria-current')).toBe(link === selectedLink ? 'page' : null);
      }
    }
  });

  it('should keep RAP Music as a safe external link', () => {
    const link = (fixture.nativeElement as HTMLElement).querySelector<HTMLAnchorElement>('nav a[target="_blank"]');
    expect(link?.href).toBe('https://rap.neitanworales.com/');
    expect(link?.rel).toBe('noopener noreferrer');
    expect(link?.classList.contains('active')).toBe(false);
  });
});
