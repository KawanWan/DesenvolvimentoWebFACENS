import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  login: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.login = this.route.snapshot.paramMap.get('login') || '';
  }
}
