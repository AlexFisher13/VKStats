import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VkapiService {
  constructor(private httpClient: HttpClient) {}

  getUser(): Observable<any> {
    return this.httpClient.get('https://api.vk.com/method/users.get?user_ids=17261895', {
      observe: 'body',
      responseType: 'json'
    });
  }
}
