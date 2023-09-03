import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from '../classes/role';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  constructor(private httpClient: HttpClient) {}

  private BASE_URL = 'http://localhost:8082/api/v1/role';

  getAllRoles(): Observable<Role[]> {
    return this.httpClient.get<Role[]>(
      `${this.BASE_URL}/getRoles`
    );
  }
}
