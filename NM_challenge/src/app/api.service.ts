import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service'

@Injectable({
    providedIn: 'root',
})

export class APIService{
    constructor( private http:HttpClient ) { }

    getData(){
        return this.http.get('http://localhost:3000/APItest')
        //return this.http.get('https://boardgamegeek.com/xmlapi2/collection?username=dullorb')
    }
}