import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

constructor(private http:HttpClient){}

/* private apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=13.08&longitude=80.27&daily=temperature_2m_max,temperature_2m_min&timezone=auto'; */


private apiUrl = 'http://localhost:3200/api/india-weather';
getData(){
 return this.http.get(this.apiUrl)
}

}
