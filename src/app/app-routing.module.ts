import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterUserComponent} from './register-user/register-user.component';
import {LoginUserComponent} from './login-user/login-user.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
const routes: Routes = [
{path: '', redirectTo:'register-user', pathMatch: 'full'},
{path: 'register-user', component: RegisterUserComponent},
{path: 'login-user', component: LoginUserComponent},
{path: 'scheduler', component: SchedulerComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
