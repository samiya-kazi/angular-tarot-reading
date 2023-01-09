import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cardImgRoot = 'http://localhost:3000/cards/image/'
  cardBackImgPath = 'http://localhost:3000/cards/image/back.jpg'
  
  @Input() card! : Card;
  @Input() selected! : boolean;
  @Input() face! : boolean;

  @Output() selectCardEvent = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  handleSelect () {
    this.selectCardEvent.emit(this.card);
  }

}
