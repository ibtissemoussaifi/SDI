import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../service/employee.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-create-employee",
  templateUrl: "./create-employee.component.html",
  styleUrls: ["./create-employee.component.css"],
})
export class CreateEmployeeComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private router: Router,
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder,
    private location: Location
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.maxLength(60)]],
      lastName: ["", [Validators.required, Validators.maxLength(60)]],
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.registerForm.controls[controlName].hasError(errorName);
  };

  get employe() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    this.save();
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
  }

  save() {
    this.employeeService.createEmployee(this.registerForm.value).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
  }

  gotoList() {
    this.router.navigate(["/list"]);
  }

  public onCancel = () => {
    this.location.back();
  };
}
