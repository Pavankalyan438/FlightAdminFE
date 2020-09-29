import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightEntity, FlightserviceService } from '../flightservice.service';

@Component({
  selector: 'app-searchflight',
  templateUrl: './searchflight.component.html',
  styleUrls: ['./searchflight.component.css']
})
export class SearchflightComponent implements OnInit {
flightnumber:number
flight:FlightEntity

msg:string

  constructor(private service:FlightserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  

  public getflight(){
this.service.searchFlight(this.flightnumber).subscribe(
data=>{
this.flight=data


}

)
  }

  updateflight(updateflight:FlightEntity){
    this.service.updateFlight(updateflight);
    this.router.navigate(['updateflight']);
  }
  delete(deleteflight:FlightEntity):any{
    if(confirm("Are you sure you want to delete?")){
      this.service.deleteflight(deleteflight.flightNumber).subscribe(data => {
        this.msg = data
      });
      window.location.reload();
    }
  }
}