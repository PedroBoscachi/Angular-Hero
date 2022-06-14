import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private api = environment.apiURL

  constructor(private http: HttpClient) { }

  get listHeroes(): Observable<any> {
    return this.http.get<any>(this.api)
  }

  public buscarPorId(idUrl: string): Observable<any> {
    return this.http.get<any>(idUrl)

  }

}
