import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateDepartementComponent } from "./departements/create/create-departement/create-departement.component";
import { CreateEmployeeComponent } from "./employees/create/create-employee.component";
import { DetailEmployeeComponent } from "./employees/detail/detail-employee/detail-employee.component";
import { ListEmployeesComponent } from "./employees/list/list-employees.component";
import { UpdateEmployeeComponent } from "./employees/update/update-employee.component";

const routes: Routes = [
  { path: "list", component: ListEmployeesComponent },
  { path: "create", component: CreateEmployeeComponent },
  { path: "details/:id", component: DetailEmployeeComponent },
  { path: "update/:id", component: UpdateEmployeeComponent },
  { path: "", redirectTo: "/list", pathMatch: "full" },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
