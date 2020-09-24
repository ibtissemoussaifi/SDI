import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Departement } from "../model/departement.model";
import { DepartementService } from "../service/departement.service";

@Component({
  selector: "app-list-departement",
  templateUrl: "./list-departement.component.html",
  styleUrls: ["./list-departement.component.css"],
})
export class ListDepartementComponent implements OnInit {
  displayedColumns: string[] = ["firstName", "action"];
  id: any;
  departements: Departement[];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  addd: any;
  update: any;
  firstName: any;
  dataSource: any;
  reset: any;
  data: any;
  submitted = false;
  constructor(
    private departementService: DepartementService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getDepartements();
  }
  recieve(data) {
    console.log(data);
  }

  openCreateUpdateModal(addUpdateTemplate, mode, data?) {
    if (mode === "aadd") {
      this.addd = true;
    } else if (mode === "update") {
      this.addd = false;
      this.id = data.id;
      this.data = data;
      // this.departementService.getDepartementDetail(id).subscribe((data) => {
      //   this.registerForm.get("firstName").setValue(data.firstName);
      // });
    }
    this.modalService.open(addUpdateTemplate, { size: "md", centered: true });
  }

  onSubmit(body) {
    console.log(this.addd);

    console.log(body);
    this.submitted = true;
    this.departementService.createDepartement(body).subscribe(
      (data) => {
        console.log(data);
        this.getDepartements();
        this.reset = true;

        // this.registerForm.reset();
      },
      (error) => console.log(error)
    );

    this.addd;
    this.modalService.dismissAll();
  }
  public getDepartements(): any {
    this.departementService
      .getDepartementsList()
      .subscribe((data: Departement[]) => {
        this.departements = data;
        this.dataSource = new MatTableDataSource(this.departements);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  deleteDepartement(id: number) {
    this.departementService.deleteDepartement(id).subscribe(
      (data) => {
        console.log(data);
        this.getDepartements();
      },
      (error) => console.log(error)
    );
  }
  updateDepartement(body) {
    this.departementService.updateDepartement(this.id, body).subscribe(
      (data) => {
        console.log(data), this.getDepartements();
        this.reset = true;
      },
      (error) => console.log(error)
    );
    this.modalService.dismissAll();
  }
  cancel() {
    this.modalService.dismissAll();
  }
}
