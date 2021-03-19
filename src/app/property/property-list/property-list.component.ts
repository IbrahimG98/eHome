import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IHouse } from '../IHouse.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent=1;
  homes:Array<IHouse>;

  constructor(private route:ActivatedRoute,
    private housingservice:HousingService) { }

  ngOnInit(): void {
   if(this.route.snapshot.url.toString())
   {
     this.SellRent=2;
   }

   this.housingservice.getAllProperties(this.SellRent).subscribe(
     data=>{
       this.homes=data;
     }
   );
  }

}
