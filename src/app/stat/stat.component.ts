import { Component, OnInit } from '@angular/core';
import {VkapiService} from '../vkapi.service';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css'],
  providers: [ VkapiService ]
})
export class StatComponent implements OnInit {
  user = {};
  id;

  constructor(private vkapiService: VkapiService) {}

  ngOnInit() {
      this.vkapiService.getUser(this.id).subscribe(user => this.user = user.response[0]);
  }
  idHandler(id) {
   console.log(id.value);
   this.id = id.value;
   this.ngOnInit();
  }
}
