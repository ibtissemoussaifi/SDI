import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateEmployeeComponent } from "./employees/create/create-employee.component";
import { DetailEmployeeComponent } from "./employees/detail/detail-employee/detail-employee.component";
import { ListEmployeesComponent } from "./employees/list/list-employees.component";
import { UpdateEmployeeComponent } from "./employees/update/update-employee.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
