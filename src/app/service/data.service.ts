import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';
interface Event {
  eventName: string;
  cityName: string;
  date: string;
  weather: string;
  distanceKm: string;
  imgUrl: string;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco';
 
  constructor(private http: HttpClient) { }
  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiUrl).pipe(
      map((response: any) => response.events));
}

}
