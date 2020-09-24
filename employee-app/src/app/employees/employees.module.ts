import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EmployeesRoutingModule } from "./employees-routing.module";
import { AppComponent } from "../app.component";
import { ListEmployeesComponent } from "./list/list-employees.component";
import { CreateEmployeeComponent } from "./create/create-employee.component";
import { NavbarEmployeesComponent } from "./navbar/navbar-employees.component";
import { DetailEmployeeComponent } from "./detail/detail-employee/detail-employee.component";
import { UpdateEmployeeComponent } from "./update/update-employee.component";
import { MainNavComponent } from "../main-nav/main-nav.component";

@NgModule({
  imports: [CommonModule, EmployeesRoutingModule],
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    NavbarEmployeesComponent,
    DetailEmployeeComponent,
    UpdateEmployeeComponent,
    MainNavComponent,
  ],
  providers: [],
})
export class EmployeesModule {}
