import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHouse } from 'src/app/model/iHouse';
import { IHouseBase } from 'src/app/model/iHouseBase';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
  @Input() homeInput:IHouseBase;
  @Input() hideIcons:boolean;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

  }

}
