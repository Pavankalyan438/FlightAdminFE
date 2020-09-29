

import { Component, OnInit } from '@angular/core';
import { FlightEntity, FlightserviceService } from '../flightservice.service';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {
  flight:FlightEntity=new FlightEntity();
  msg:string
  constructor(private service:FlightserviceService) { }

  ngOnInit(): void {
  }

public onSubmit(){
this.service.addFlight(this.flight).subscribe(
  data=>
  this.msg=data
)
}
}
