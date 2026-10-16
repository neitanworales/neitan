import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Main } from './main';

describe('Main', () => {
  let component: Main;
  let fixture: ComponentFixture<Main>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Main],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Main);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should link to projects and open external sites safely', () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('h1')?.textContent).toContain('Neitan Worales');
    expect(element.querySelector('.projects-link')?.getAttribute('href')).toBe('/projects');
    const externalLinks = Array.from(element.querySelectorAll<HTMLAnchorElement>('a[target="_blank"]'));
    expect(externalLinks).toHaveLength(4);
    for (const link of externalLinks) {
      expect(link.rel).toBe('noopener noreferrer');
      expect(link.href).toMatch(/^https:\/\//);
    }
    expect(element.querySelector('a[href="#"]')).toBeNull();
  });
});
