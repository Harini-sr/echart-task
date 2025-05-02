import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

constructor(private http:HttpClient){}

private apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=13.08&longitude=80.27&daily=temperature_2m_max,temperature_2m_min&timezone=auto';

getData(){
 return this.http.get(this.apiUrl)
}

}
