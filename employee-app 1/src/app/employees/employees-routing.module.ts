import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainNavComponent } from "../main-nav/main-nav.component";
import { ListEmployeesComponent } from "./list/list-employees.component";

const routes: Routes = [
  { path: "employees/list", component: ListEmployeesComponent },
  { path: "", redirectTo: "main", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}
