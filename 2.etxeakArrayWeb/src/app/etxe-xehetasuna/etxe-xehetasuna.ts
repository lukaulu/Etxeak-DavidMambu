import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Etxeak } from '../etxeak';
import { TruePipe } from '../pipes/true-pipe';


@Component({
  imports: [RouterLink, TruePipe],
  selector: 'app-etxe-xehetasuna',
  styleUrl: './etxe-xehetasuna.css',
  templateUrl: './etxe-xehetasuna.html',
})

export class EtxeXehetasuna {
  private etxeakZerbitzua = inject(Etxeak);
  
  id = input.required<string>();
  etxea = computed(() => this.etxeakZerbitzua.bat(this.id()));

}
