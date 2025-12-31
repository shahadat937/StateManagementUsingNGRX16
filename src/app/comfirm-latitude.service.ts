import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface ComfirmLatitudeLongitude {
  latitude: number;
  longitude: number;
}
@Injectable({
  providedIn: 'root'
})
export class ComfirmLatitudeService {
private apiUrl = 'http://localhost:5057/api/sbgrv/comfirm-latitude-longitude/create';

  constructor(private http: HttpClient) {

  }

  saveLocation(location: ComfirmLatitudeLongitude): Observable<any> {
    return this.http.post<any>(this.apiUrl, location);
  }
}
