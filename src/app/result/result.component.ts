import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})

@Injectable()
export class ResultComponent implements OnInit {
  
  // loading: boolean = this.apiService.loading;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.api_request();
  }
  api_request(): any {
    this.apiService.api_query()
    .subscribe(data => {
      console.log(data);
    });
  }
}