import { Component, OnInit } from '@angular/core';

import { FlightEntity, FlightserviceService } from '../flightservice.service';

@Component({
  selector: 'app-updateflight',
  templateUrl: './updateflight.component.html',
  styleUrls: ['./updateflight.component.css']
})
export class UpdateflightComponent implements OnInit {
obj:FlightEntity
message:string
  constructor(private service:FlightserviceService) {
this.obj=this.service.updateMethod();

   }

  ngOnInit(): void {
  }
  onUpdateflight(flight:FlightEntity){
    console.log(flight)
    this.service.onUpdateflight(flight).subscribe(
      data=>this.message=data,
      
    )

  }
}
