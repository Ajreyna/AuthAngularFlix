import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupLoginComponent } from './signup-login/signup-login.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {path: '', component: SignupLoginComponent},
  {path: 'main', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
