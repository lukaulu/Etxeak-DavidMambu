import { Component, inject, signal } from '@angular/core';
import { Etxeak } from '../etxeak';
import { Etxea } from '../etxea';
import { EtxeTxartela } from '../etxe-txartela/etxe-txartela';


@Component({
  imports: [EtxeTxartela],
  selector: 'app-etxe-zerrenda',
  styleUrl: './etxe-zerrenda.css',
  templateUrl: './etxe-zerrenda.html',
})
export class EtxeZerrenda {

  private etxeakZerbitzua = inject(Etxeak);

  etxeak = signal<Etxea[]>(this.etxeakZerbitzua.guztiak());
}
