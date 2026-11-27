import { Component, inject, Output, signal } from '@angular/core';
import { BilaketaService } from '../bilaketa-service';

@Component({
  imports: [],
  selector: 'app-bilatzailea',
  styleUrl: './bilatzailea.css',
  templateUrl: './bilatzailea.html',
})
export class Bilatzailea {
  bilaketaService = inject(BilaketaService);

  onBilaketa(event:Event) {
    const balioa = (event.target as HTMLInputElement).value;
    this.bilaketaService.hiriEguneratu(balioa);
  }
}
