import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightEntity } from '../flightservice.service';

@Component({
  selector: 'app-adminoperations',
  templateUrl: './adminoperations.component.html',
  styleUrls: ['./adminoperations.component.css']
})
export class AdminoperationsComponent implements OnInit {
uname:string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      this.uname = params.name;
    });
    console.log(this.uname);
  }

}
