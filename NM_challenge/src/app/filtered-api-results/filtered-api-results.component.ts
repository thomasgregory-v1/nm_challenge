import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import {ElementRef, Pipe, PipeTransform, ViewChild} from '@angular/core';
import { GameTable } from '../Interface_Table'

@Component({
  selector: 'app-filtered-api-results',
  templateUrl: './filtered-api-results.component.html',
  styleUrls: ['./filtered-api-results.component.css']
})

export class FilteredApiResultsComponent implements OnInit {

  @ViewChild('room_num', {static: true}) room_numElement: ElementRef;
  room_num_val: string = ''

  apiData : GameTable[] = []

  constructor(
      private api:APIService,
      room_numElement: ElementRef) { 
        this.room_numElement=room_numElement;
      }

  ngOnInit() {
    this.api.getData().subscribe(
      (data:any)=>{this.apiData = data;}
    )
  }

}


@Pipe({name:'roomFilter'})
export class RoomFilterPipe implements PipeTransform {
  transform(value: GameTable[], roomNumber:string) {     
    if(isNaN(parseInt(roomNumber))){
      return value
    }
    return value.filter(val=>val.Room == parseInt(roomNumber))
  }      
}