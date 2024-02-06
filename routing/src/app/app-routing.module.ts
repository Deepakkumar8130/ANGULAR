import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { UsersComponent } from './Components/users/users.component';
import { MissionComponent } from './Components/about/mission/mission.component';
import { VissionComponent } from './Components/about/vission/vission.component';
import { CultureComponent } from './Components/about/culture/culture.component';

const routes: Routes = [
  {
    path:'',
    component : HomeComponent
  },
  {
    path:'about',
    component : AboutComponent,
    children : [
      {
        path : 'mission',
        component : MissionComponent
      },
      {
        path : 'vission',
        component : VissionComponent
      },
      {
        path : 'culture',
        component : CultureComponent
      },
    ]
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
