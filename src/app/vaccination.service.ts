import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, defaultIfEmpty, map, Observable } from 'rxjs';
import { VaccinationCenter } from './vaccination-center';

@Injectable({
  providedIn: 'root'
})
export class VaccinationService {

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  getAllVaccinationCenter(): Observable<VaccinationCenter[]>{
    return this.httpClient.get<VaccinationCenter[]>("api/public/centers/city",{observe: 'response'}).pipe(
      map((resp)=>{
        if(!!resp.body){
          return resp.body
        }
        return []
      }),
      catchError((err) => {
        console.log(err)
        this.router.navigate(['/infos/429']);
        return []
      })
    );
  }

  getVaccinationCenterByCity(city: string = ""): Observable<VaccinationCenter[]>{
    return this.httpClient.get<VaccinationCenter[]>("api/public/centers/city",{
      params: {
          "city": city
        }
      });
  }
}
