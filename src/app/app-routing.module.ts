import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { PoemModule } from './poem/poem.module';

const routes: Routes = [{
  path:'',
  component:HomeComponentComponent
},
{
  path:'poems',
  loadChildren: () => import("./poem/poem.module").then( m => m.PoemModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
