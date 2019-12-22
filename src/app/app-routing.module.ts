import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {ChooseComponent} from './choose/choose.component';
import {RegisterComponent} from './register/register.component';
import {AdministerComponent} from './administer/administer.component';
import {ManagermentComponent} from './managerment/managerment.component';
import {UpdateFoodComponent} from './update-food/update-food.component';

import {AddFoodComponent} from './add-food/add-food.component';

const routes: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: 'logout', component: LogoutComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'administer', component: AdministerComponent},
  {path: 'index', component: IndexComponent, children: [
      { path: '', redirectTo: '/choose', pathMatch: 'full' },
      {path: 'choose', component: ChooseComponent},
      {path: 'managerment', component: ManagermentComponent},
      { path: 'updateFood/:id', component: UpdateFoodComponent},
      {path: 'addFood', component: AddFoodComponent}
    ]},
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
