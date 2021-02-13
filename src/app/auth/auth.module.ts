import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { RegistorComponent } from "./components/register/register.component";

const routes: Routes = [
  {
    path: 'register',
    component: RegistorComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [
    RegistorComponent
  ]
})
export class AuthModule {

}