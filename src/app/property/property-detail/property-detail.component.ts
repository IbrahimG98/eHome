import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }
  public propertyId:number;
  ngOnInit(): void {
    this.propertyId=Number(this.route.snapshot.params["id"]);

    this.route.params.subscribe(data=>
      {
        this.propertyId=+data["id"];
      });
  }

  onSelectNext()
  {
     this.propertyId++;
     this.router.navigate(['detail',this.propertyId]);
  }

}
