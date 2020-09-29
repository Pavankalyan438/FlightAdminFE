import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightserviceService, Userdata } from '../flightservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
msg:string
  constructor(private service:FlightserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(u:Userdata){
    console.log(u)
    this.service.loginAdmin(u).subscribe(
users=>{
  console.log(users )
  if(users==="Login Successful")
      this.router.navigate(['adminoperations'],{ queryParams: {name: u.userName}})
  else
  this.msg=users 
}
    )
  }
}