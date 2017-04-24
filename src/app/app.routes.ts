import { Routes } from '@angular/router';


export const myRouts: Routes = [
  { path: 'user', loadChildren: './+user#UserModule'}

];
