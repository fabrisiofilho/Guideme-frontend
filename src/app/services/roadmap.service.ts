import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Content } from '../models/content';
import { Layer } from '../models/layer';
import { Question } from '../models/question';
import { Roadmap } from '../models/roadmap';
import { Step } from '../models/step';
import { UserProgress } from '../models/user-progress';

@Injectable({
  providedIn: 'root'
})
export class RoadmapService {

  private URL = environment.url;

  constructor(private http: HttpClient) { }

  register(roadmap: Roadmap) {
    return this.http.post<Roadmap>(this.URL + "/roadmap", roadmap);
  }

  findById() {
    return this.http.get<Roadmap>(this.URL + "/roadmap/get");
  }

  deleteById(id: string) {
    return this.http.delete(this.URL + "/roadmap/delete/" + id);
  }

  deleteStepById(id: string) {
    return this.http.delete<Roadmap>(this.URL + "/roadmap/delete/step/" + id);
  }

  deleteLayerById(id: string) {
    return this.http.delete<Roadmap>(this.URL + "/roadmap/delete/layer/" + id);
  }

  addLayers(layer: Layer) {
    return this.http.post<Roadmap>(this.URL + "/roadmap/addLayer", layer);
  }

  addStep(step: Step) {
    return this.http.post<Roadmap>(this.URL + "/roadmap/addStep", step);
  }

  addContent(content: Content) {
    return this.http.post<Roadmap>(this.URL + "/roadmap/addValidate", content);
  }

  findQuestionsById(id: string) {
    return this.http.get<Step>(this.URL + "/roadmap/question/" + id);
  }

  validate(question: Question) {
    return this.http.post<UserProgress>(this.URL + "/advance", question);
  }

}
