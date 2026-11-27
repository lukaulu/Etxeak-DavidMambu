import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Etxeak } from '../etxeak';
import { Etxea } from '../etxea';
import { Interesduna } from '../interesduna';
import { TruePipe } from '../pipes/true-pipe';

// Gako bakarra etxe guztietarako; etxearen id-aren arabera iragazten da.
const GAKOA = 'interesdunak';

@Component({
  imports: [TruePipe, FormsModule],
  selector: 'app-etxe-xehetasuna',
  styleUrl: './etxe-xehetasuna.css',
  templateUrl: './etxe-xehetasuna.html',
})
export class EtxeXehetasuna {
  private etxeakZerbitzua = inject(Etxeak);

  id = input.required<string>();

  etxea = signal<Etxea | undefined>(undefined);
  kargatzen = signal(true);
  errorea = signal('');

  // Formularioa
  izena = signal('');
  abizena = signal('');
  emaila = signal('');

  // Interesdun guztiak (localStorage-tik irakurrita)
  private guztiak = signal<Interesduna[]>(this.irakurri());
  interesdunak = computed(() => this.guztiak().filter(i => i.etxeaId === this.id()));

  constructor() {
    effect((onCleanup) => {
      const id = this.id();
      this.kargatzen.set(true);
      this.errorea.set('');
      this.etxea.set(undefined);

      const harpidetza = this.etxeakZerbitzua.bat(id).subscribe({
        next: (etxea) => {
          this.etxea.set(etxea);
          this.kargatzen.set(false);
        },
        error: (err: HttpErrorResponse) => {
          // 404: etxe hori ez dago; beste kasuetan, errore orokorra
          if (err.status !== 404) {
            this.errorea.set('Ezin izan da etxea kargatu. Ziurtatu json-server martxan dagoela.');
          }
          this.kargatzen.set(false);
        }
      });
      onCleanup(() => harpidetza.unsubscribe());

      // Orria kargatzean (edo etxea aldatzean), localStorage-tik berriro irakurri
      this.guztiak.set(this.irakurri());
    });
  }

  bidali() {
    const berria: Interesduna = {
      izena: this.izena().trim(),
      abizena: this.abizena().trim(),
      emaila: this.emaila().trim(),
      etxeaId: this.id()
    };
    const dena = [...this.guztiak(), berria];
    localStorage.setItem(GAKOA, JSON.stringify(dena));
    this.guztiak.set(dena);

    this.izena.set('');
    this.abizena.set('');
    this.emaila.set('');
  }

  private irakurri(): Interesduna[] {
    try {
      const testua = localStorage.getItem(GAKOA);
      const datuak = testua ? JSON.parse(testua) : [];
      return Array.isArray(datuak) ? datuak : [];
    } catch {
      return [];
    }
  }
}
