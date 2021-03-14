import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
    constructor(private http: HttpClient) {
    }

    // faire la requette api
    api_query(): Observable<any> {
    //     const httpHeaders: HttpHeaders = new HttpHeaders({
    //     "x-rapidapi-key": "b44ac3cef7msh2a251909734d8a7p1b49d1jsnc347da90b005",
	// 	"x-rapidapi-host": "ytgrabber.p.rapidapi.com",
    //     "useQueryString": "true"
    // });
        // return this.http.get('https://ytgrabber.p.rapidapi.com/app/get/SLWvPQZDrVQ', { headers: httpHeaders });;
        return this.http.get('https://anapioficeandfire.com/api/characters/583');
    }
}