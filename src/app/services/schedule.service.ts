import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  [x: string]: any;

  constructor(private _http: HttpClient) { }

  addSchedule(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/schedule', data)
  }

  updateSchedule(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/schedule/${id}`, data)
  }

  getSchedule(): Observable<any> {
    return this._http.get('http://localhost:3000/schedule');
  }

  deleteSchedule(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/schedule/${id}`);
  }
}
