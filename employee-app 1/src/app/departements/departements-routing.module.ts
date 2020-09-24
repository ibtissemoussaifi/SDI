import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChilddComponent } from "./childd/childd.component";
import { ListDepartementComponent } from "./list-departement/list-departement.component";
import { ParenttComponent } from "./parentt/parentt.component";

const routes: Routes = [
  { path: "departement/list", component: ListDepartementComponent },
  { path: "childd", component: ChilddComponent },
  { path: "parentt", component: ParenttComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartementsRoutingModule {}
