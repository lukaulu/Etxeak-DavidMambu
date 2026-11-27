import { Component, inject, input, signal, computed } from '@angular/core';
import { Etxeak } from '../etxeak';
import { Etxea } from '../etxea';
import { EtxeTxartela } from '../etxe-txartela/etxe-txartela';
import { BilaketaService } from '../bilaketa-service';
import { Bilatzailea } from '../bilatzailea/bilatzailea';


@Component({
  imports: [EtxeTxartela, Bilatzailea],
  selector: 'app-etxe-zerrenda',
  styleUrl: './etxe-zerrenda.css',
  templateUrl: './etxe-zerrenda.html',
})
export class EtxeZerrenda {
  private etxeakZerbitzua = inject(Etxeak);
  private bilaketaService = inject(BilaketaService);

  etxeak = signal<Etxea[]>(this.etxeakZerbitzua.guztiak());

  etxeFiltratuak = computed(()=> {
    const filtroa = this.bilaketaService.hiriBilatuta().toLowerCase().trim();
    if (!filtroa) {
      return this.etxeak();
    }
    return this.etxeak().filter(etxea =>
      etxea.city.toLowerCase().includes(filtroa)
    );
  });
}
