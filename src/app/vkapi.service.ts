import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class VkapiService {
  constructor(private httpClient: HttpClient) {}

  getUser() {
    return this.httpClient.get('https://api.vk.com/method/users.get?user_ids=17261895&fields=bdate&v=5.73', {
      headers: new HttpHeaders().append('Access-Control-Allow-Origin: *', '')
    });
  }
}
