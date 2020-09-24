import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";
import { Departement } from "../../model/departement.model";
import { ServicedepartementService } from "../../service/servicedepartement.service";

@Component({
  selector: "app-list-departement",
  templateUrl: "./list-departement.component.html",
  styleUrls: ["./list-departement.component.css"],
})
export class ListDepartementComponent implements OnInit {
  departements: Departement[];
  displayedColumns: string[] = ["firstName", "lastName", "action"];
  dataSource: any;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private departementService: ServicedepartementService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): any {
    this.departementService
      .getDepartementList()
      .subscribe((data: Departement[]) => {
        this.departements = data;
        this.dataSource = new MatTableDataSource(this.departements);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  deleteEmployee(id: number) {
    this.departementService.deleteDepartement(id).subscribe(
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
