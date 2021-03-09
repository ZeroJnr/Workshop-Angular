import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
    constructor(private http: HttpClient) {
    }
    api_query(): Observable<any> {
        // this.loading = true;
        const httpHeaders: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/ld+json',
        "x-rapidapi-key": "SIGN-UP-FOR-KEY",
		"x-rapidapi-host": "coolguruji-youtube-to-mp3-download-v1.p.rapidapi.com"});
        return this.http.get<any>('https://coolguruji-youtube-to-mp3-download-v1.p.rapidapi.com/?id=lF-jPBnZ098', { headers: httpHeaders });
    }
}