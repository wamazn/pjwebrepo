import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { CorePjMaterialModule } from '@pajuani/core/pjmaterial';

import { LoginComponent } from './login.component';
import { LoginGuard } from './login.guard';
import { RouteModule } from './route.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    CorePjMaterialModule,
    ReactiveFormsModule,
    RouteModule,
    FlexLayoutModule
  ],
  providers: [LoginGuard]
})
export class LoginModule { }
