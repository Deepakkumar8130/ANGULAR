import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { UsersComponent } from './Components/users/users.component';

const routes: Routes = [
  {
    path:'',
    component : HomeComponent
  },
  {
    path:'about',
    component : AboutComponent
  },
  {
    path:'users',
    component : UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
