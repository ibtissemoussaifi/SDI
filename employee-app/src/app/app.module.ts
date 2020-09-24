import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListEmployeesComponent } from "./employees/list/list-employees.component";
import { CreateEmployeeComponent } from "./employees/create/create-employee.component";
import { Routes, RouterModule } from "@angular/router";
import { NavbarEmployeesComponent } from "./employees/navbar/navbar-employees.component";
import { HttpClientModule } from "@angular/common/http";
import { EmployeeService } from "./employees/service/employee.service";
import { DetailEmployeeComponent } from "./employees/detail/detail-employee/detail-employee.component";
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
} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { UpdateEmployeeComponent } from "./employees/update/update-employee.component";
import { MainNavComponent } from "./main-nav/main-nav.component";
import { LayoutModule } from "@angular/cdk/layout";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { EmployeesRoutingModule } from "./employees/employees-routing.module";

const appRoutes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    NavbarEmployeesComponent,
    DetailEmployeeComponent,
    UpdateEmployeeComponent,
    MainNavComponent,
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
