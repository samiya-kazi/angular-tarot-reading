import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card-selection',
  templateUrl: './card-selection.component.html',
  styleUrls: ['./card-selection.component.css']
})
export class CardSelectionComponent implements OnInit {

  @Input() deck!: Card[]
  @Input() selectedCards!: Card[]
  @Output() showFortuneEvent = new EventEmitter()
  @Output() changeSelectedEvent = new EventEmitter()
  @Output() shuffleEvent = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  handleSelect(card: Card) {
    const index = this.selectedCards.indexOf(card);

    if(index >= 0) {
      const newList = this.selectedCards.filter(c => card !== c);
      // this.selectedCards = newList
      this.changeSelectedEvent.emit(newList);
    } else {
      if (this.selectedCards.length < 6) {
        const newList = [...this.selectedCards, card];
        this.changeSelectedEvent.emit(newList);
      }
    }
  }

  showFortune() {
    this.showFortuneEvent.emit(true);
  }

  shuffleCards () {
    this.shuffleEvent.emit();
  }
}
