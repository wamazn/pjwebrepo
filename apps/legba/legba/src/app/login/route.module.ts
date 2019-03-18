import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';



import { LoginComponent } from './login.component';
import { LoginGuard } from './login.guard';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { /* title: extract('Login'), */ canActivate: [LoginGuard] }
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RouteModule { }
