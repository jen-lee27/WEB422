import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Uni } from '../interfaces/uni';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  isFetch: Boolean = false;
  list: Uni[] = [];
  allList: Uni[] = [];
  constructor(private http: HttpClient) { }
  getList(): Observable<Uni[]> {
    this.isFetch = true;
    console.log(this.isFetch);
    return this.http.get<Uni[]>('http://universities.hipolabs.com/search?country=Canada');
  }

  getOntarioUniversities() {
    return this.list.filter((uni) => uni["state-province"] === "Ontario");
  }
  getQuebecUniversities() {
    return this.list.filter((uni) => uni["state-province"] === "Quebec");
  }
  getAlbertaUniversities() {
    return this.list.filter((uni) => uni["state-province"] === "Alberta");
  }

  setUniversities(arr: Uni[]): void {
    this.list = this.allList = arr;
  }
  getUniversities() {
    return this.list = this.allList;
  }

  removeData(name: string) {
    console.log(name);
    this.allList.filter((uni) => {
      if (uni.name === name) {
        let index = this.allList.indexOf(uni);
        this.allList.splice(index, 1);
      }
    });
  }
}
