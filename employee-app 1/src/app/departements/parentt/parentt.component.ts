import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parentt",
  templateUrl: "./parentt.component.html",
  styleUrls: ["./parentt.component.css"],
})
export class ParenttComponent implements OnInit {
  currentItem = " ibtissem oussaifi ";
  x = 24;
  items = ["item1", "item2", "item3", "item4"];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  ngOnInit() {}
}
