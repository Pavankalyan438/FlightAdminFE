import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FlightserviceService {
  updateflight: FlightEntity


  public updateFlight(updateflight: FlightEntity) {
    this.updateflight = updateflight;

  }
  updateMethod() {
    return this.updateflight;
  }
  public onUpdateflight(updateflight:FlightEntity){
    console.log("ins service update");
       return this.http.put("http://localhost:2000/flight/updateflight",updateflight,{ responseType: 'text'});
    }

  deleteflight(id: number) {
    console.log("ins service delete");
    return this.http.delete("http://localhost:2000/flight/deleteflight/ " + id, { responseType: 'text' })
  }

  searchFlight(flightnumber: number) {
    return this.http.get<FlightEntity>("http://localhost:2000/flight/searchflight/" + flightnumber)
  }


  constructor(private http: HttpClient) { }
  loginAdmin(u: Userdata) {
    return this.http.put("http://localhost:2000/login/checkdetails", u, { responseType: 'text' });
  }
  addFlight(flight: FlightEntity) {
    return this.http.post("http://localhost:2000/flight/addflight", flight, { responseType: 'text' })
  }

  public getFlights(){
    console.log("ins service get flights");
    return this.http.get<FlightEntity>("http://localhost:2000/flight/allflights");
  }

}
export class Userdata {

  userName: string;

  userPassword: string;
}
export class FlightEntity {


  flightNumber: number;
  flightMdel: string;
  carrierName: string;
  seatCapacity: number;
}