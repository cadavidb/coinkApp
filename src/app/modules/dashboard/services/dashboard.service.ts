import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { transformData } from '../utils/transform-data.utils';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  api: string = 'https://rickandmortyapi.com/api';
  drawerOpen:BehaviorSubject<boolean> = new BehaviorSubject(true);
  constructor(private http: HttpClient) {}

  getAllCharacters(page: number, limit: number): Observable<any> {
    return this.http
      .get(`${this.api}/character/?page=${page}&limit=${limit}`)
      .pipe((map((data: any) => transformData(data))));
  }
  getCharacter(name: string): Observable<any> {
    return this.http.get(`${this.api}/character/?name=${name}`);
  }

  get stateDrawer(){
    return this.drawerOpen.asObservable();
  }
}
