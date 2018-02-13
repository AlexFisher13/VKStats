import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class VkapiService {
  users = [
    {name: 'name1', property: false},
    {name: 'name2', property: false},
    {name: 'name3', property: false}
  ];
  constructor(private http: Http) {}

  getStat() {
    return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb');
  }
}
