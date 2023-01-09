import { Component, OnInit, Input  } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card-selection',
  templateUrl: './card-selection.component.html',
  styleUrls: ['./card-selection.component.css']
})
export class CardSelectionComponent implements OnInit {

  @Input() deck!: Card[]
  @Input() selectedCards!: Card[]

  constructor() { }

  ngOnInit(): void {
  }

  handleSelect(card: Card) {
    const index = this.selectedCards.indexOf(card);

    if(index >= 0) {
      const newList = this.selectedCards.filter(c => card !== c);
      this.selectedCards = newList
    } else {
      if (this.selectedCards.length < 6) {
        const newList = [...this.selectedCards, card];
        this.selectedCards = newList
      }
    }
  }

}
