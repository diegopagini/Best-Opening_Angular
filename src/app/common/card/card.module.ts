import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { DomseguroPipe } from '../../pipes/dom-seguro.pipe';

@NgModule({
  declarations: [CardComponent, DomseguroPipe],
  imports: [CommonModule],
  exports: [CardComponent],
})
export class CardModule {}
