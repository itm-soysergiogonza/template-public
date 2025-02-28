import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor() { }

  initializeTheme() {
    document.documentElement.classList.toggle(
      "dark",
      localStorage['theme'] === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }

  setLightTheme() {
    localStorage['theme'] = 'light';
    document.documentElement.classList.remove('dark');
  }

  setDarkTheme() {
    localStorage['theme'] = 'dark';
    document.documentElement.classList.add('dark');
  }

  useSystemTheme() {
    localStorage.removeItem('theme');
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
