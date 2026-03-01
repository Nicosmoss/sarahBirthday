import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoemRoutingModule } from './poem-routing.module';
import { PoemCardComponent } from './poem-card/poem-card.component';


@NgModule({
  declarations: [
    PoemCardComponent
  ],
  imports: [
    CommonModule,
    PoemRoutingModule
  ]
})
export class PoemModule { }
