import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Item } from '../models/item';
import { Pageable } from '../models/pageable';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private URL = environment.url;

  private PATH = "/store/item"

  constructor(private http: HttpClient) { }

  listItem() {
    return this.http.get<Item[]>(this.URL + "/store/item/list");
  }

  search(search: string) {
    return this.http.get<Pageable<Item>>(this.URL+ this.PATH + "/find?search="+ search);
  }

  getOne(id: string) {
    return this.http.get<Item>(this.URL+ this.PATH + "/" + id);
  }

  update(item: Item) {
    return this.http.put<Item>(this.URL + this.PATH, item);
  }

  create(item: Item) {
    return this.http.post<Item>(this.URL + this.PATH, item);
  }

  delete(id: string) {
    return this.http.delete<void>(this.URL + this.PATH + "/" + id);
  }

  buyItem(id: string) {
    return this.http.post<void>(this.URL + "/store" + "/buy/" + id, null);
  }
}
