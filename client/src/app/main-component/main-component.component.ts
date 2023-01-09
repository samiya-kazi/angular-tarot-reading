import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client.service';
import { Card } from '../card';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  deck : Card[] = [];
  selectedCards : Card[] = [];

  constructor(private api : ApiClientService) { }

  ngOnInit(): void {
    this.getCards();
  }

  getCards () : void {
    this.api.getAllCards().subscribe(cards => this.deck = cards);
  }

}
