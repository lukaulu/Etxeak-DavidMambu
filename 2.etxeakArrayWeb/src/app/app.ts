import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { Bilatzailea } from './bilatzailea/bilatzailea';

@Component({
  imports: [RouterOutlet, RouterLinkWithHref, Bilatzailea],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('1.etxeakArrayWeb');
}
