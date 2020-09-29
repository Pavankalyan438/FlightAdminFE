import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightEntity, FlightserviceService } from '../flightservice.service';

@Component({
  selector: 'app-allflights',
  templateUrl: './allflights.component.html',
  styleUrls: ['./allflights.component.css']
})
export class AllflightsComponent implements OnInit {
  message:string;
  flight:FlightEntity[];
  constructor(private service:FlightserviceService,private router:Router) { }

  ngOnInit(): any {
    this.service.getFlights().subscribe(
      response=>this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response){
    this.flight=response;
  }
  updateflight(updateflight:FlightEntity){
    this.service.updateFlight(updateflight);
    this.router.navigate(['updateflight']);
  }
  delete(deleteflight:FlightEntity):any{
    if(confirm("Are you sure you want to delete?")){
      this.service.deleteflight(deleteflight.flightNumber).subscribe(data => {
        this.message = data
      });
      window.location.reload();
    }
  }
}