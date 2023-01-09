import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  rootUrl = 'http://localhost:3000/cards';

  constructor(private http : HttpClient) { }

  getAllCards() : Observable<Card[]> {
    return this.http.get<Card[]>(this.rootUrl);
  }

  getCardInfo(id: String) : Observable<Card> {
    return this.http.get<Card>(this.rootUrl + '/' + id);
  }
}
