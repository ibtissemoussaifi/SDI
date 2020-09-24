import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ServicedepartementService } from "../../service/servicedepartement.service";

@Component({
  selector: "app-create-departement",
  templateUrl: "./create-departement.component.html",
  styleUrls: ["./create-departement.component.css"],
})
export class CreateDepartementComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private router: Router,
    private departementService: ServicedepartementService,
    private formBuilder: FormBuilder,
    private location: Location
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.maxLength(60)]],
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
    this.departementService
      .createDepartement(this.registerForm.value)
      .subscribe(
        (data) => console.log(data),
        (error) => console.log(error)
      );
  }

  gotoList() {
    this.router.navigate(["/list"]);
  }
}
