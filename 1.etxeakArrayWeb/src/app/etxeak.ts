import { Injectable } from '@angular/core';
import { Etxea } from './etxea';

const ARGAZKIAK = 'https://angular.dev/assets/images/tutorials/common/';

@Injectable({
  providedIn: 'root',
})

export class Etxeak {
  etxeak: Etxea[] = [
    { id: '0', name: 'Acme Fresh Start Housing',
      city: 'Chicago', state: 'IL',
      photo: ARGAZKIAK + 'bernard-hermant-CLKGGwIBTaY-unsplash.jpg',
      availableUnits: 4, wifi: true, laundry: true },
    { id: '1', name: 'A113 Transitional Housing',
      city: 'Santa Monica', state: 'CA',
      photo: ARGAZKIAK + 'brandon-griggs-wR11KBaB86U-unsplash.jpg',
      availableUnits: 0, wifi: false, laundry: true },
    { id: '2', name: 'Warm Beds Housing Support',
      city: 'Juneau', state: 'AK',
      photo: ARGAZKIAK + 'i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg',
      availableUnits: 1, wifi: false, laundry: false },
    { id: '3', name: 'Homesteady Housing',
      city: 'Chicago', state: 'IL',
      photo: ARGAZKIAK + 'ian-macdonald-W8z6aiwfi1E-unsplash.jpg',
      availableUnits: 1, wifi: true, laundry: false },
    { id: '4', name: 'Happy Homes Group',
      city: 'Gary', state: 'IN',
      photo: ARGAZKIAK + 'krzysztof-hepner-978RAXoXnH4-unsplash.jpg',
      availableUnits: 1, wifi: true, laundry: false },
    { id: '5', name: 'Hopeful Apartment Group',
      city: 'Oakland', state: 'CA',
      photo: ARGAZKIAK + 'r-architecture-JvQ0Q5IkeMM-unsplash.jpg',
      availableUnits: 2, wifi: true, laundry: true },
    { id: '6', name: 'Seriously Safe Towns',
      city: 'Oakland', state: 'CA',
      photo: ARGAZKIAK + 'phil-hearing-IYfp2Ixe9nM-unsplash.jpg',
      availableUnits: 5, wifi: true, laundry: true },
    { id: '7', name: 'Hopeful Housing Solutions',
      city: 'Oakland', state: 'CA',
      photo: ARGAZKIAK + 'r-architecture-GGupkreKwxA-unsplash.jpg',
      availableUnits: 2, wifi: true, laundry: true },
    { id: '8', name: 'Seriously Safe Towns',
      city: 'Oakland', state: 'CA',
      photo: ARGAZKIAK + 'saru-robert-9rP3mxf8qWI-unsplash.jpg',
      availableUnits: 10, wifi: false, laundry: false },
    { id: '9', name: 'Capital Safe Towns',
      city: 'Portland', state: 'OR',
      photo: ARGAZKIAK + 'webaliser-_TPTXZd9mOo-unsplash.jpg',
      availableUnits: 6, wifi: true, laundry: true },
  ];

  guztiak(): Etxea[]{
      return this.etxeak
  }
  bat(id: string): Etxea | undefined {
      return this.etxeak.find(e => e.id === id);
  }
}
