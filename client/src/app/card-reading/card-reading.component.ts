import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiClientService } from '../api-client.service';
import { Card } from '../card';

@Component({
  selector: 'app-card-reading',
  templateUrl: './card-reading.component.html',
  styleUrls: ['./card-reading.component.css']
})
export class CardReadingComponent implements OnInit {

  faceUp = true;
  cardInfo : {[key: string]: Card} = {};
  @Input() selectedCards! : Card[];

  @Output() resetEvent = new EventEmitter;

  constructor(private api: ApiClientService) { }

  ngOnInit(): void {
    this.selectedCards.forEach(card => {
      this.api.getCardInfo(card._id).subscribe(card => this.cardInfo[card._id] = card);
    })
  }

  handleReset () {
    this.resetEvent.emit(false);
  }

}
