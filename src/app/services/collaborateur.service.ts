import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Collaborateur} from "../classes/collaborateur";

@Injectable({
  providedIn: 'root'
})
export class CollaborateurService {

  constructor(private httpClient: HttpClient) {
  }

  private BASE_URL = "http://localhost:8082/api/v1/collaborateur";

  getAllManagerRH(): Observable<Collaborateur[]> {
    return this.httpClient.get<Collaborateur[]>(`${this.BASE_URL}/get/all/Managers`);
  }
  getNonManagerRH(): Observable<Collaborateur[]> {
    return this.httpClient.get<Collaborateur[]>(`${this.BASE_URL}/get/NonManagers`);
  }

  getNonAffectedCollabs(): Observable<Collaborateur[]> {
    return this.httpClient.get<Collaborateur[]>(`${this.BASE_URL}/get/nonAffectedCollabs`);
  }


  getMangerWithoutAcc() {
    return this.httpClient.get<Collaborateur[]>(`${this.BASE_URL}/get/ManagerWithoutAcc`);
  }
}
