import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ChangeDetectorRef,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-form-departement",
  templateUrl: "./form-departement.component.html",
  styleUrls: ["./form-departement.component.css"],
})
export class FormDepartementComponent implements OnInit {
  registerForm: FormGroup;
  @Output() add: any = new EventEmitter();
  @Output() update: any = new EventEmitter();
  @Output() Cancel: any = new EventEmitter();

  @Input() set data(value) {
    if (value) {
      this._data = value;
    }
  }

  @Input() mode: any;
  _data: any;
  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private cdref: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.maxLength(60)]],
    });
    if (!this.mode) {
      this.registerForm.get("firstName").setValue(this._data.firstName);
    }
  }

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
