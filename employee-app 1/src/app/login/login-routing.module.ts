import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginUserComponent } from "./login-user/login-user.component";

const routes: Routes = [{ path: "login", component: LoginUserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
