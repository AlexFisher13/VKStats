import { Component, OnInit } from '@angular/core';
import {VkapiService} from '../vkapi.service';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css'],
  providers: [ VkapiService ]
})
export class StatComponent implements OnInit {
  user;

  constructor(private vkapiService: VkapiService) {}

  ngOnInit() {
      this.vkapiService.getUser().then(user => this.user = user);
  }

}
