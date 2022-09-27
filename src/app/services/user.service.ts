import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Notifications } from '../models/notifications';
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

  getNotification() {
    return this.http.get<Notifications[]>(this.URL + "/user/notification");
  }

  setReadNotification(id: number) {
    return this.http.post<void>(this.URL + "/user/notification/"+ id, null);
  }

}
