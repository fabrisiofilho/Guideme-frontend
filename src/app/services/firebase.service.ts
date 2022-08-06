import { Injectable } from '@angular/core';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { FirebaseOptions, initializeApp } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }

  getImage(url: string) {
    const opts: FirebaseOptions = {
      databaseURL: url
    }
    initializeApp(opts);
    const storage = getStorage();
    getDownloadURL(ref(storage, url))
    .then((url) => {
      console.log(url);
    })
    .catch((error) => {
    });
  }

}
