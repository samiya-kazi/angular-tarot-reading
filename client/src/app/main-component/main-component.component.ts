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
    this.api.getAllCards().subscribe(cards => this.deck = this.shuffle(cards));
  }

  fortuneViewChange (state: Boolean) : void {
    this.fortuneView = state;
    if (!this.fortuneView) this.selectedCards = [];
  }

  changeSelectedCards (newList : Card[]) {
    this.selectedCards = newList;
  }

  shuffleCards () {
    this.deck = this.shuffle(this.deck);
  }

  shuffle (cards : Card[]) {
    const array = [...cards];
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

}
