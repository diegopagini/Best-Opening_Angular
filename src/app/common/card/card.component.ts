import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() vote: boolean;
  @Output() sendVote = new EventEmitter<boolean>();
  @Input() opening;

  voteOpening() {
    this.vote = !this.vote;
    this.sendVote.emit(this.vote);
  }
}
