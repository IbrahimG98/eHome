import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHouse } from '../IHouse.interface';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
  @Input() homeInput:IHouse;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {


  }

}
