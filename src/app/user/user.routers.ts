import {UserSignUpComponent} from "./registration/registraion.component";

export const routes = [
  { path: '', children: [
    { path: 'signup', component: UserSignUpComponent },
  ]},
];
