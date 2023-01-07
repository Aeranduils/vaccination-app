import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VaccinationCenter } from './vaccination-center/vaccination-center';

@Injectable({
  providedIn: 'root'
})
export class VaccinationService {
  constructor(private httpClient: HttpClient) { }

  getAllVaccinationCenter() : Observable<VaccinationCenter[]>{
    return this.httpClient.get<VaccinationCenter[]>("api/public/centers");
    }
  
/*
  createBooking(book: Booking): Observable<Booking>{
    return this.httpClient.post("/api/public/booking", book);
  }*/
}



  
