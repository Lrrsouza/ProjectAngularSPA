import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSpaComponent } from './home-spa/home-spa.component';

const routes: Routes = [
  {
    path:'',
    component: HomeSpaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
