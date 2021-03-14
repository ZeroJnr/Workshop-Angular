import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})

@Injectable()
export class ResultComponent implements OnInit {

  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
    this.api_request();
  }

  api_request(): any {
    this.apiservice.api_query().
    subscribe(data => {
      console.log(data);
    });
  }
}
