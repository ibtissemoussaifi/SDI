import { Component, OnInit, ViewChild } from "@angular/core";
import { Employee } from "../model/employee.model";
import { EmployeeService } from "../service/employee.service";
import { MatPaginator, MatTableDataSource, MatSort } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "app-list-employees",
  templateUrl: "./list-employees.component.html",
  styleUrls: ["./list-employees.component.css"],
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  displayedColumns: string[] = ["firstName", "lastName", "action"];
  dataSource: any;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private employeeService: EmployeeService,
    private router: Router
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

  employeeDetails(id: number) {
    this.router.navigate(["details", id]);
  }

  updateEmployee(id: number) {
    this.router.navigate(["update", id]);
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  };
}
