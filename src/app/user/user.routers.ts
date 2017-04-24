import {UserSignUpComponent} from "./registration/registration.component";

export const routes = [
  { path: '', children: [
    { path: 'signup', component: UserSignUpComponent },
  ]},
];
