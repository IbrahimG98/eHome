import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHouseBase } from 'src/app/model/iHouseBase';
import { IHouse } from '../IHouse.interface';

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
