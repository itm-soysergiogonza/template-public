import { Component, type OnInit } from '@angular/core';

import { NgIf, NgOptimizedImage } from '@angular/common';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-header',
  imports: [NgOptimizedImage, NgIf],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor(private _themeService: ThemeService) {}

  ngOnInit() {
    this._themeService.ngOnInit();
  }

  toggleTheme(): void {
    this._themeService.toggleTheme();
  }

  isDarkTheme(): boolean {
    return this._themeService.isDarkTheme();
  }

  protected readonly ThemeService = ThemeService;
}
