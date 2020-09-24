import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class EmployeeService {
  baseUrl = 'http://localhost:3000';
    constructor(private httpClient: HttpClient) { }
    

    getEmployeesList(): Observable<any> {
      return this.httpClient.get(`${this.baseUrl}/employees`);
    }

    deleteEmployee(id: number): Observable<any> {
      return this.httpClient.delete(`${this.baseUrl}/employees/${id}`, { responseType: 'text' });
    }

    createEmployee(employee: Object): Observable<Object> {
      return this.httpClient.post(`${this.baseUrl}/employees`, employee);
    }

    getEmployeeDetail(id: number): Observable<any> {
      return this.httpClient.get(`${this.baseUrl}/employees/${id}`);
    }

    updateEmployee(id: number, value: any): Observable<Object> {
      return this.httpClient.put(`${this.baseUrl}/employees/${id}`, value);
    }
}
