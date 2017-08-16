import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Vacation } from './vacation';
import { VacationDataStore } from './vacation.datastore';


@Injectable()
export class VacationService {
  private apiUrl = 'api/vacations';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});
  //private loggedInUser: User;
  constructor(
        private http: Http
  ){}

  getVacations(userId: number): Promise<Vacation[]>{
    const url = `${this.apiUrl}?userId=${userId}`;
    return this.http.get(url)
      .toPromise()
      .then(response => {
        var vacations = response.json().data as Vacation;
        return vacations;
      })
      .catch(this.handleError);
  }

  addVacation(startDate: Date, endDate: Date, user_id: number){

  }

  update(vacation: Vacation): Promise<Vacation>{
        const url = `${this.apiUrl}/${vacation.id}`;
        return this.http
            .put(url, JSON.stringify(vacation), {headers: this.headers})
            .toPromise()
            .then(() => vacation)
            .catch(this.handleError)
  } 

  private handleError(error: any): Promise<any> {
    //console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}