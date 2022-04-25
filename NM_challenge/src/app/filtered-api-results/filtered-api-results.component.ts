import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';


@Component({
  selector: 'app-filtered-api-results',
  templateUrl: './filtered-api-results.component.html',
  styleUrls: ['./filtered-api-results.component.css']
})

export class FilteredApiResultsComponent implements OnInit {

 

  apiData = []
  constructor(private api:APIService) { }

  ngOnInit() {
    this.api.getData().subscribe(
      (data:any)=>{this.apiData = data;}
    )
  }

}
