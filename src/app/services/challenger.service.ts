import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Challenger } from '../models/challenger';
import { Pageable } from '../models/pageable';

@Injectable({
  providedIn: 'root'
})
export class ChallengerService {

  private URL = environment.url;
  private PATH = "/challenger";

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get<Challenger[]>(this.URL+ this.PATH + "/list");
  }

  search(search: string) {
    return this.http.get<Pageable<Challenger>>(this.URL+ this.PATH + "/find?search="+ search);
  }

  getOne(id: string) {
    return this.http.get<Challenger>(this.URL+ this.PATH + "/" + id);
  }

  update(challenger: Challenger) {
    return this.http.put<Challenger>(this.URL + this.PATH, challenger);
  }

  create(challenger: Challenger) {
    return this.http.post<Challenger>(this.URL + this.PATH, challenger);
  }

  delete(id: string) {
    return this.http.delete<String>(this.URL + this.PATH + "/" + id);
  }

  validation(validation: validation) {
    return this.http.post<void>(this.URL + this.PATH + "/validated", validation);
  }

}

interface validation {
  id: number,
  response: string
}
