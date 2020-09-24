import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EmployeesRoutingModule } from "./employees-routing.module";

@NgModule({
  imports: [CommonModule, EmployeesRoutingModule],
  providers: [],
})
export class EmployeesModule {}
