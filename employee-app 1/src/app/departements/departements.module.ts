import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DepartementsRoutingModule } from "./departements-routing.module";
import { ListDepartementComponent } from "./list-departement/list-departement.component";
import { ParenttComponent } from './parentt/parentt.component';
import { ChilddComponent } from './childd/childd.component';
import { FormDepartementComponent } from './form-departement/form-departement.component';

@NgModule({
  imports: [CommonModule, DepartementsRoutingModule],
  declarations: [ListDepartementComponent, ParenttComponent, ChilddComponent, FormDepartementComponent],
})
export class DepartementsModule {}
