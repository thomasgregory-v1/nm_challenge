import {ElementRef, Pipe, PipeTransform, ViewChild} from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { GameTable } from '../Interface_Table'



@Component({
  selector: 'app-test-filtering',
  templateUrl: './test-filtering.component.html',
  styleUrls: ['./test-filtering.component.css']
})
export class TestFilteringComponent implements OnInit {

  @ViewChild('room_num', {static: true}) room_numElement: ElementRef;
  room_num_val: string = '1'

  TableList : GameTable[] =[
    {Room : 1, TableNumber : 1, NumberOfSeats : 8},
    {Room : 1, TableNumber : 2, NumberOfSeats : 8},
    {Room : 1, TableNumber : 4, NumberOfSeats : 6},
    {Room : 2, TableNumber : 1, NumberOfSeats : 4},
    {Room : 2, TableNumber : 2, NumberOfSeats : 4},
    {Room : 2, TableNumber : 3, NumberOfSeats : 4},
    {Room : 3, TableNumber : 1, NumberOfSeats : 2}
  ]
 

  constructor(room_numElement: ElementRef) { 
    this.room_numElement=room_numElement;
   }

  ngOnInit(): void{ }

  changeRoom() {
    this.room_num_val = this.room_numElement.nativeElement.value;
  }
}

@Pipe({name:'roomFilter'})
export class RoomFilterPipe implements PipeTransform {
  transform(value: GameTable[], roomNumber:string) {     
    return value.filter(val=>val.Room == parseInt(roomNumber))
  }      
}



