import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

@Injectable()
export class HomeComponent implements OnInit {
  // loading: boolean;
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  sendData(): void {
    this.router.navigateByUrl('/result');
  }
}
