import { Component, OnInit, ViewChild } from "@angular/core";
import { Employee } from "../model/employee.model";
import { EmployeeService } from "../service/employee.service";
import { MatPaginator, MatTableDataSource, MatSort } from "@angular/material";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: "app-list-employees",
  templateUrl: "./list-employees.component.html",
  styleUrls: ["./list-employees.component.css"],
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  displayedColumns: string[] = ["firstName", "lastName", "action"];
  dataSource: any;
  add: any;
  update: any;
  details: any = false;
  registerForm: FormGroup;
  submitted = false;
  list: any;

  data: any;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  id: any;
  reset: any;
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): any {
    this.employeeService.getEmployeesList().subscribe((data: Employee[]) => {
      this.employees = data;
      this.dataSource = new MatTableDataSource(this.employees);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(
      (data) => {
        console.log(data);
        this.getEmployees();
      },
      (error) => console.log(error)
    );
  }

  onSubmit(event) {
    this.submitted = true;
    this.employeeService.createEmployee(event).subscribe(
      (data) => {
        console.log(data);
        this.getEmployees();

        event.reset();
      },
      (error) => console.log(error)
    );
    this.add;
    this.modalService.dismissAll();
  }
  updateEmpl(body) {
    this.employeeService.updateEmployee(this.id, body).subscribe(
      (data) => {
        console.log(data), this.getEmployees();
        this.reset.reset();
      },
      (error) => console.log(error)
    );
    this.modalService.dismissAll();
  }

  openCreateUpdateModal(addUpdateTemplate, mode, data?) {
    if (mode === "aadd") {
      this.add = true;
    } else if (mode === "update") {
      this.add = false;
      this.id = data.id;
      this.data = data;
      // this.employeeService.getEmployeeDetail(id).subscribe((data) => {
      //   this.registerForm.get("firstName").setValue(data.firstName);
      //   this.registerForm.get("lastName").setValue(data.lastName);
      // });
    }
    this.modalService.open(addUpdateTemplate, { size: "md", centered: true });
  }
  cancel() {
    this.modalService.dismissAll();
  }

  // openDetailModal(detailTemplate, id) {
  //   this.employeeService.getEmployeeDetail(id).subscribe((data) => {
  //     this.list = data;
  //     console.log(this.list, "list");
  //   });
  //   this.modalService.open(detailTemplate, { size: "md", centered: true });
  // }
  // public hasError = (controlName: string, errorName: string) => {
  //   return this.registerForm.controls[controlName].hasError(errorName);
  // };
}
