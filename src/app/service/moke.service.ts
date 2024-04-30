import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MokeService {
  private readonly mockUrl = 'https://demo1290477.mockable.io/pockemon'
  //https://servicodados.ibge.gov.br/api/v1/localidades/estados
  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    return this.http.get<any>(this.mockUrl);

  }
}
