import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DepartementsRoutingModule } from "./departements/departements-routing.module";

import { EmployeesRoutingModule } from "./employees/employees-routing.module";
import { ListEmployeesComponent } from "./employees/list/list-employees.component";
import { LoginRoutingModule } from "./login/login-routing.module";

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    EmployeesRoutingModule,
    DepartementsRoutingModule,
    LoginRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
