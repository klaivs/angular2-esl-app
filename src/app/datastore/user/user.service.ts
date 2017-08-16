import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './user';
//import { UserDataStore } from './user.datastore';


@Injectable()
export class UserService {
  private apiUrl = 'api/users';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});
  private loggedInUser: User;
  constructor(
        private http: Http
  ){}

  login(username: string, password: string): Promise<User> {
    var ret;
    return this.getUser(username)
      .then(usr => {
        var isok = false;
        if(typeof usr !== 'undefined'){
          if(usr.password==password){
            isok = true;
            this.loggedInUser = usr;
          }else{
            throw new Error('Passwords do not match!');
          }
        }else{
          throw new Error('User not found!');
        }
        return isok ? usr : null;
      })
      .catch(this.handleError);
  }

  logout(){
    delete this.loggedInUser;
  }

  getUser(username: string): Promise<User>{
    const url = `${this.apiUrl}?username=${username}`;
    return this.http.get(url)
      .toPromise()
      .then(response => {
        var users = response.json().data as User;
        return users[0];
      })
      .catch(this.handleError);
  }
  
  getLoggedInUser(){
    return this.loggedInUser;
  }

  update(user: User): Promise<User>{
        const url = `${this.apiUrl}/${user.id}`;
        return this.http
            .put(url, JSON.stringify(user), {headers: this.headers})
            .toPromise()
            .then(() => user)
            .catch(this.handleError)
  } 

  private handleError(error: any): Promise<any> {
    //console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}