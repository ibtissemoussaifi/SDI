import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DepartementsRoutingModule } from "./departements-routing.module";
import { CreateDepartementComponent } from './create/create-departement/create-departement.component';
import { ListDepartementComponent } from './list/list-departement/list-departement.component';

@NgModule({
  imports: [CommonModule, DepartementsRoutingModule],
  declarations: [CreateDepartementComponent, ListDepartementComponent],
})
export class DepartementsModule {}
