import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BilaketaService {
    hiriBilatuta = signal<string>('');

    hiriEguneratu(testua:string) {
        this.hiriBilatuta.set(testua);
    }
}
