import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DepartementService {
  baseUrl = "http://localhost:3001";
  constructor(private httpClient: HttpClient) {}

  getDepartementsList(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/departements`);
  }

  deleteDepartement(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/departements/${id}`, {
      responseType: "text",
    });
  }

  createDepartement(departement: Object): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/departements`, departement);
  }

  getDepartementDetail(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/departements/${id}`);
  }

  updateDepartement(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/departements/${id}`, value);
  }
}
