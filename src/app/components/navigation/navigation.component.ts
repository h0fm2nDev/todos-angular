import { Component, OnInit } from '@angular/core';
import { NAVOPTIONS } from '../../data/mocks/mock-navoptions'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {
  navoptions = NAVOPTIONS;

  title = "TodosNg"
  constructor() { }

  ngOnInit(): void {
  }

}
