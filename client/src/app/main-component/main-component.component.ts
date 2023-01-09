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
  fortuneView : Boolean = false;

  constructor(private api : ApiClientService) { }

  ngOnInit(): void {
    this.getCards();
  }

  getCards () : void {
    this.api.getAllCards().subscribe(cards => this.deck = cards);
  }

  fortuneViewChange (state: Boolean) : void {
    this.fortuneView = state;
    if (!this.fortuneView) this.selectedCards = [];
  }

  changeSelectedCards (newList : Card[]) {
    this.selectedCards = newList;
  }

}
