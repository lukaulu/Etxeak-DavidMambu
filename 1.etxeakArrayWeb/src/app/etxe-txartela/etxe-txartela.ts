import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Etxea } from '../etxea';

@Component({
  imports: [RouterLink],
  selector: 'app-etxe-txartela',
  styleUrl: './etxe-txartela.css',
  templateUrl: './etxe-txartela.html',
})
export class EtxeTxartela {
  etxea = input.required<Etxea>();
}
