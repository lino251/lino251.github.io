import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CurrencyServiceService {

  constructor(private httpClient: HttpClient) { }

  getCurrency(): Observable<any> {
    return this.httpClient.get(environment.currency);
  }
}
