import { Component, EventEmitter, Input, Output } from '@angular/core';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: '¿Seguro/a que quieres votar por este?',
      icon: 'question',
      iconHtml: '?',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      showCancelButton: true,
      showCloseButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.confirmVote();
      }
    });
  }

  confirmVote() {
    this.vote = !this.vote;
    this.sendVote.emit(this.vote);
  }
}
