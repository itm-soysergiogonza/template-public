import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './core/layout/header/header.component';
import {MainComponent} from './core/layout/main/main.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tailwind';
}
