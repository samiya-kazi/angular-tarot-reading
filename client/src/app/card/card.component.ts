import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiClientService } from '../api-client.service';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cardImgRoot = 'http://localhost:3000/cards/image/'
  cardBackImgPath = 'http://localhost:3000/cards/image/back.jpg'

  cardInfo? : Card;
  
  @Input() card! : Card;
  @Input() selected! : Boolean;
  @Input() face! : Boolean;

  @Output() selectCardEvent = new EventEmitter()

  constructor(private api : ApiClientService) { }

  ngOnInit(): void {
    this.getCardInfo();
  }

  getCardInfo() {
    this.api.getCardInfo(this.card._id).subscribe(info => this.cardInfo = info);
  }

  handleSelect () {
    this.selectCardEvent.emit(this.card);
  }

}
