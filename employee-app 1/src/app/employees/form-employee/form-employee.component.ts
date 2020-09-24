import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-form-employee",
  templateUrl: "./form-employee.component.html",
  styleUrls: ["./form-employee.component.css"],
})
export class FormEmployeeComponent implements OnInit {
  registerForm: FormGroup;
  _data: any;
  @Output() add: any = new EventEmitter();
  @Output() update: any = new EventEmitter();
  @Output() Cancel: any = new EventEmitter();

  @Input() set data(value) {
    if (value) {
      this._data = value;
    }
  }
  @Input() mode;
  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private cdref: ChangeDetectorRef
  ) {}
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.maxLength(60)]],
      lastName: ["", [Validators.required, Validators.maxLength(60)]],
    });

    if (!this.mode) {
      this.registerForm.get("firstName").setValue(this._data.firstName);
      this.registerForm.get("lastName").setValue(this._data.lastName);
    }
  }
  // ngAfterViewChecked() {
  //   console.log();
  //   if (!this.mode) {
  //     this.registerForm.get("firstName").setValue(this._data.firstName);
  //     this.registerForm.get("lastName").setValue(this._data.lastName);
  //     this.cdref.detectChanges();
  //   }
  // }
  public hasError = (controlName: string, errorName: string) => {
    return this.registerForm.controls[controlName].hasError(errorName);
  };
  onSubmit() {
    this.add.emit(this.registerForm.value);
  }
  updateDepartement() {
    this.update.emit(this.registerForm.value);
  }

  cancel() {
    this.Cancel.emit();
  }
}
