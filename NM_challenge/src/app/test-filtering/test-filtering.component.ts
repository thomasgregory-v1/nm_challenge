import {Pipe, PipeTransform} from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { GameTable } from '../Interface_Table'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-filtering',
  templateUrl: './test-filtering.component.html',
  styleUrls: ['./test-filtering.component.css']
})
export class TestFilteringComponent implements OnInit {

  @Input() testinput?: Number

  TableList : GameTable[] =[
    {Room : 1, TableNumber : 1, NumberOfSeats : 8},
    {Room : 1, TableNumber : 2, NumberOfSeats : 8},
    {Room : 1, TableNumber : 4, NumberOfSeats : 6},
    {Room : 2, TableNumber : 1, NumberOfSeats : 4},
    {Room : 2, TableNumber : 2, NumberOfSeats : 4},
    {Room : 2, TableNumber : 3, NumberOfSeats : 4},
    {Room : 3, TableNumber : 1, NumberOfSeats : 2}
  ]


  constructor() {  }

  ngOnInit(): void{ }

}

@Pipe({name:'roomFilter'})
export class RoomFilterPipe implements PipeTransform {
  transform(value: GameTable[], roomNumber:string) {
     
    return value.filter(val=>val.Room == parseInt(roomNumber))
  }      
}



