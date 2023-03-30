import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.component.html',
  styleUrls: ['./allstudents.component.css']
})
export class AllstudentsComponent implements OnInit {

  dataArray :any ;
  constructor(private ds :DataService) {

  }

  ngOnInit(): void {
  }

}
