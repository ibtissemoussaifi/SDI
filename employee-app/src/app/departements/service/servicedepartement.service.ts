import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ServicedepartementService {
  baseUrl = "http://localhost:3000";
  constructor(private httpClient: HttpClient) {}

  getDepartementList(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/departements`);
  }

  deleteDepartement(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/departements/${id}`, {
      responseType: "text",
    });
  }

  createDepartement(employee: Object): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/departements`, employee);
  }

  getDepartementDetail(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/departements/${id}`);
  }

  updateDepartement(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/departements/${id}`, value);
  }
}
