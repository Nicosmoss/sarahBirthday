import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoemCardComponent } from './poem-card/poem-card.component';

const routes: Routes = [{
  path:'',
  component:PoemCardComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoemRoutingModule { }
