import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-user",
  templateUrl: "./login-user.component.html",
  styleUrls: ["./login-user.component.css"],
})
export class LoginUserComponent implements OnInit {
  constructor(private router: Router) {}
  username: string;
  password: string;
  ngOnInit() {}

  login(): void {
    if (this.username == "admin" && this.password == "admin") {
      this.router.navigate(["user"]);
    } else {
      alert("Invalid credentials");
    }
  }
}
