import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Employee } from "../model/employee.model";
import { catchError } from "rxjs/operators";
@Injectable()
export class EmployeeService {
  baseUrl = "http://localhost:3000";
  constructor(private httpClient: HttpClient) {}

  getEmployeesList(): Observable<any> {
    return this.httpClient.get(
      `https://localhost:44306/Home/GetAllutilisateur`
    );
  }
  createEmployee(employee: Object): Observable<any> {
    console.log(employee);
    return this.httpClient.post(
      `https://localhost:44306/Home/postUser`,
      employee
    );
  }
  deleteEmployee(id: number): Observable<any> {
    return this.httpClient.delete<any>(
      "https://localhost:44306/Home/DeleteUtilisateur?id=" + id
    );
  }
  updateEmployee(id: number, value: Employee): Observable<any> {
    return this.httpClient.put(
      `https://localhost:44306/Home/UpdateUtilisateur?id=` + id,
      value
    );
  }
  // getEmployeeDetail(id: number): Observable<any> {
  //   return this.httpClient.get(`${this.baseUrl}/employees/${id}`);
  // }
}
