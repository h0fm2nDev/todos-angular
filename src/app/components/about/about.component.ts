import { Component, OnInit } from '@angular/core';
import { ABOUT } from '../../data/mocks/mock-about'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  abouts = ABOUT;
  constructor() { }

  ngOnInit(): void {
  }

}
