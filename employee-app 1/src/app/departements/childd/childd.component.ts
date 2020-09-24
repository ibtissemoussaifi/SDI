import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-childd",
  templateUrl: "./childd.component.html",
  styleUrls: ["./childd.component.css"],
})
export class ChilddComponent implements OnInit {
  displayedColumns: string[] = ["firstName", "action"];
  registerForm: any;
  add: any;
  update: any;

  @Input() name: string;
  @Input() age: number;

  @Output() newitemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newitemEvent.emit(value);
  }

  ngOnInit() {}
}
