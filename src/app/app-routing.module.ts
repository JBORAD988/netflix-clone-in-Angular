import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {BrowseComponent} from "./pages/browse/browse.component";
import {authGuard} from "./guards/auth.guard";

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'browse',component:BrowseComponent, canActivate:[authGuard]},
  // {path:'**',component:LoginComponent},
  {path:"**", redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
