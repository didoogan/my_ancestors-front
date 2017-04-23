import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {UserSignUpComponent} from "./registration/registraion.component";
import { routes } from './user.routers';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserSignUpComponent],
  providers: [
  ]
})
export class UserModule {
  public static routes = routes;
}
