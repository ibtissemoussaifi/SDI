import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListEmployeesComponent } from "./employees/list/list-employees.component";

import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { EmployeeService } from "./employees/service/employee.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatDialogModule,
} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MainNavComponent } from "./main-nav/main-nav.component";
import { LayoutModule } from "@angular/cdk/layout";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { ListDepartementComponent } from "./departements/list-departement/list-departement.component";
import { EmployeesModule } from "./employees/employees.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { LoginUserComponent } from "./login/login-user/login-user.component";
import { ChilddComponent } from "./departements/childd/childd.component";
import { ParenttComponent } from "./departements/parentt/parentt.component";
import { FormDepartementComponent } from "./departements/form-departement/form-departement.component";
import { FormEmployeeComponent } from "./employees/form-employee/form-employee.component";

const appRoutes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    ListEmployeesComponent,
    ListDepartementComponent,
    LoginUserComponent,
    ChilddComponent,
    ParenttComponent,
    FormDepartementComponent,
    FormEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatCardModule,
    MatToolbarModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    EmployeesModule,
    NgbModule,
    MatProgressSpinnerModule,
  ],
  providers: [EmployeeService],
  exports: [
    MatTableModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatCardModule,
    MatToolbarModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
