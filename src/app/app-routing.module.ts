import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupLoginComponent } from './signup-login/signup-login.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path: 'main', component: MainComponent, canActivate: [AuthGuard]},
  {path: '**', component: SignupLoginComponent, pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
