import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VkapiService {
  constructor(private httpClient: HttpClient) {}

  urlstart = 'https://api.vk.com/method/users.get?user_ids=';
  bdate = '&fields=bdate,sex,city,country,contacts,schools,status,interests,about';

  getUser(id): Observable<any> {
    return this.httpClient.get(this.urlstart + id + this.bdate, {
      observe: 'body',
      responseType: 'json'
    });
  }
}
