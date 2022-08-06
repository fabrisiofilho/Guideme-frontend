import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Roadmap } from '../models/roadmap';
import { Step } from '../models/step';

@Injectable({
  providedIn: 'root'
})
export class RoadmapService {

  private URL = environment.url;

  constructor(private http: HttpClient) { }

  register(roadmap: Roadmap) {
    return this.http.post<Roadmap>(this.URL + "/roadmap", roadmap);
  }

  findById(id: string) {
    return this.http.get<Roadmap>(this.URL + "/roadmap/find/" + id);
  }

  deleteById(id: string) {
    return this.http.delete(this.URL + "/roadmap/delete/" + id);
  }

  deleteStepById(id: string) {
    return this.http.delete<Roadmap>(this.URL + "/roadmap/delete/step/" + id);
  }

  addStep(step: Step) {
    return this.http.post<Roadmap>(this.URL + "/roadmap/addStep", step);
  }

}
