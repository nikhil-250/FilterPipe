import { Component, OnInit } from '@angular/core';
import { cricketers } from './const/const';
import { Iplayers } from './model/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  searchValue: string = ``;
  selectValue:string = ``;

  cricketArr : Iplayers[] = cricketers;
  onSelect(ele:HTMLSelectElement){
    console.log(ele.value);
    this.selectValue = ele.value 
  }
  constructor(){}
  ngOnInit(): void {
     
  }

 };