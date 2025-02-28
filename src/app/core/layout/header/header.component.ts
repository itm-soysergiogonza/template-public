import {
  Component,
  type OnInit,
  type WritableSignal,
  inject,
  signal,
} from '@angular/core';

import { NgIf, NgOptimizedImage } from '@angular/common';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NgOptimizedImage, NgIf],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  private _document: Document = inject(DOCUMENT);

  isDarkTheme: WritableSignal<boolean> = signal(this._getInitialThemeState());

  ngOnInit() {
    this.applyTheme();
    this._setupSystemPreferenceListener();
  }

  toggleTheme(): void {
    this.isDarkTheme.update((value: boolean): boolean => !value);
    this._saveThemePreference();
    this.applyTheme();
  }
  private _getInitialThemeState(): boolean {
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme === 'dark') {
      return true;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  private _saveThemePreference(): void {
    localStorage.setItem('theme', this.isDarkTheme() ? 'dark' : 'light');
  }

  private applyTheme(): void {
    if (this.isDarkTheme()) {
      this._document.documentElement.classList.add('dark');
    } else {
      this._document.documentElement.classList.remove('dark');
    }
  }

  private _setupSystemPreferenceListener(): void {
    if (!localStorage.getItem('theme')) {
      const mediaQuery: MediaQueryList = window.matchMedia(
        '(prefers-color-scheme: dark)',
      );

      const handleChange = (e: MediaQueryListEvent): void => {
        this.isDarkTheme.set(e.matches);
        this.applyTheme();
      };
      try {
        mediaQuery.addEventListener('change', handleChange);
      } catch (err) {
        mediaQuery.addEventListener('change', handleChange);
      }
    }
  }
}
