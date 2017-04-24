import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { routes } from './user.routers';
import {UserSignUpComponent} from "./registration/registration.component";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "signup", component: UserSignUpComponent }
    ])
  ],
  declarations: [
    UserSignUpComponent
  ],
  providers: [
  ]
})
export class UserModule {
}
