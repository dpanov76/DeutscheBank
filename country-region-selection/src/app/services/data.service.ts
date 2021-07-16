import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Region } from "../models/region";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private  http: HttpClient) {
  }

  getData( region:Region ): Observable<any> {
    return this.http.get(`${environment.countriesApi}/${region}`);
  }
}
