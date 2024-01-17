import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './lib/header/header.component';
import { LoginComponent } from './lib/login/login.component';
import { RegisterComponent } from './lib/login/register/register.component';

const routes: Routes = [{ path: 'header', component: HeaderComponent },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: '', redirectTo: '/header', pathMatch: 'full' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
