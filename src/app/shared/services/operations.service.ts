import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'environments/environment';
import * as FileSaver from 'file-saver';


import { BehaviorSubject ,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {
  private header = new HttpHeaders();
  company$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(private http: HttpClient) { 
    this.header.set('Content-Type', 'application/json');
    this.header.set('Accept', 'application/json');
  
  }

  get(params?) {
    let parseParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(p => {
        parseParams = parseParams.append(p, params[p]);
      });
    }
    this.http
      .get<any[]>(`https://rickandmortyapi.com/api/character`, { params: parseParams })
      .subscribe(company => {

        this.company$.next(company);
        
      });
  }

  show(index: number) {
    return this.http.get(`https://rickandmortyapi.com/api/character/${index}`);
  }
  
}
