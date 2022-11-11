import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiGitHubService {

  constructor(private http: HttpClient) {

  }

  listRepository(userName:string) {
    return this.http.get(`https://api.github.com/users/${userName}/repos?per_page=50`);
  }
}
