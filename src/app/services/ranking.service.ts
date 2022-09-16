import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../security/models/user';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  private URL = environment.url;

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<User[]>(this.URL + "/user/ranking");
  }
}
