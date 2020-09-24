import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DepartementsRoutingModule } from "./departements-routing.module";
import { ListDepartementsComponent } from './list/list-departements/list-departements.component';

@NgModule({
  imports: [CommonModule, DepartementsRoutingModule],
  declarations: [ListDepartementsComponent],
})
export class DepartementsModule {}
