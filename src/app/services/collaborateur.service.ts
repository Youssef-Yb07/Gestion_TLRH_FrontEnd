import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Collaborateur } from '../classes/collaborateur';

@Injectable({
  providedIn: 'root',
})
export class CollaborateurService {
  constructor(private httpClient: HttpClient) {}

  private BASE_URL = 'http://localhost:8082/api/v1/collaborateur';

  getAllManagerRH(): Observable<Collaborateur[]> {
    return this.httpClient.get<Collaborateur[]>(
      `${this.BASE_URL}/get/all/Managers`
    );
  }
  getNonManagerRH(): Observable<Collaborateur[]> {
    return this.httpClient.get<Collaborateur[]>(
      `${this.BASE_URL}/get/NonManagers`
    );
  }

  getNonAffectedCollabs(): Observable<Collaborateur[]> {
    return this.httpClient.get<Collaborateur[]>(
      `${this.BASE_URL}/get/nonAffectedCollabs`
    );
  }

  getMangerWithoutAcc() {
    return this.httpClient.get<Collaborateur[]>(
      `${this.BASE_URL}/get/ManagerWithoutAcc`
    );
  }

  getAllCollaborateur(): Observable<Collaborateur[]> {
    return this.httpClient.get<Collaborateur[]>(`${this.BASE_URL}/get/all`);
  }

  getMaleRatio(): Observable<number> {
    return this.httpClient.get<number>(`${this.BASE_URL}/get/MaleRatio`);
  }
  getFemaleRatio(): Observable<number> {
    return this.httpClient.get<number>(`${this.BASE_URL}/get/FemaleRatio`);
  }
  getRecruitmentEvolution(): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/getRecruitmentEvolution`);
  }

  getDiplomeRatios(): Observable<Map<string, number>> {
    return this.httpClient.get<Map<string, number>>(
      `${this.BASE_URL}/get/DiplomaRatios`
    );
  }

  getSalaryEvolutionOfCollab(id:number): Observable<any>{
    return this.httpClient.get<Map<number, number>>(`${this.BASE_URL}/SalaryEvolution/${id}`);
  }

  CalculateTurnOver(): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/get/TurnOver/Annee`);
  }

  getTechnologies() {
    return this.httpClient.get(`${this.BASE_URL}get/competences`);
  }

  getSalaryEvolutions(id: number): Observable<Map<Date, number>> {
    return this.httpClient.get<Map<Date, number>>(`${this.BASE_URL}/evolution/${id}`);

  }
}
