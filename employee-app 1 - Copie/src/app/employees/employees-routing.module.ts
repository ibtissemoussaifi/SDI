import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateEmployeeComponent } from "./create/create-employee.component";
import { DetailEmployeeComponent } from "./detail/detail-employee/detail-employee.component";
import { ListEmployeesComponent } from "./list/list-employees.component";
import { UpdateEmployeeComponent } from "./update/update-employee.component";

const routes: Routes = [
  { path: "list", component: ListEmployeesComponent },
  { path: "create", component: CreateEmployeeComponent },
  { path: "details/:id", component: DetailEmployeeComponent },
  { path: "update/:id", component: UpdateEmployeeComponent },
  { path: "", redirectTo: "/list", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}
