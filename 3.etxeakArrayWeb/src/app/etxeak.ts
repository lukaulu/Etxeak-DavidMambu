import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etxea } from './etxea';

// json-server: json-server etxeak.json
export const API_URL = 'http://localhost:3000/etxeak';

@Injectable({
  providedIn: 'root',
})
export class Etxeak {
  private http = inject(HttpClient);

  guztiak(): Observable<Etxea[]> {
    return this.http.get<Etxea[]>(API_URL);
  }

  bat(id: string): Observable<Etxea> {
    return this.http.get<Etxea>(`${API_URL}/${id}`);
  }
}
