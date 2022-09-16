import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../security/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL = environment.url;

  constructor(private http: HttpClient) { }

  findUserByEmail(email: string){
    return this.http.get<User>(this.URL + "/user/email/" + email);
  }

  uploadLogo(file: File) {
    const formData = new FormData();
    if (file) {
      formData.append('attachments', file);
    }

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.set('Accept', 'application/json');

    return this.http.put<User>(this.URL + "/user/updatePhoto", formData, { headers });
  }

  updateUser(id: any, password: any, email: any, name: any) {
    return this.http.put<User>(this.URL + "/user/updateUser", {id, password, email, name});
  }

}
