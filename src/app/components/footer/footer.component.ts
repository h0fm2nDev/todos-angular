import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  copyright = '2020 | All rights reserved';
  author = 'Design and develop by hofmanDev';
  
  constructor() { }

  ngOnInit(): void {
  }

}
