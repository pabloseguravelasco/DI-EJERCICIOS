import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthRegisterDto } from '../models/dto/auth.dto';
import { AuthRegisterResponse } from '../models/interfaces/auth.interface';

const AUTH_BASE_URL = 'auth';
const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authBaseUrl = `${environment.apiBaseUrl}/${AUTH_BASE_URL}`;

  constructor(private http: HttpClient) { }

  register(registerDto: AuthRegisterDto): Observable<AuthRegisterResponse> {
    let requestUrl = `${this.authBaseUrl}/signup`;
    return this.http.post<AuthRegisterResponse>(requestUrl, registerDto, DEFAULT_HEADERS);
  }

  forgot() {
    let requestUrl = `${this.authBaseUrl}/forgot`;    
  }
}
