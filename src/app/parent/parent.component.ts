import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnChanges, DoCheck {

  email = '';
  tempArr: string[] = [];
  isOnChangesCalled: string[]= [];
  isDoCheckCalled: string[] = [];

  validateEmail(value:any): void {
    this.email = value.target.value;
    console.log('Parent validateEmail function is called');
  }

  ngOnChanges(): void {
    this.isOnChangesCalled.push("parent ngOnChange is called");
    console.log('parent ngOnChange is called');
  }

  ngDoCheck() {
    this.isDoCheckCalled.push("parent ngDoCheck is called");
    console.log('parent ngDoCheck is called');
  }

  addValueInArray(): void {
    this.tempArr.push("rohitash Singh");
  }

  clearArray(): void {
    this.tempArr.length = 0;
  }
  
}
