import { Component, DoCheck, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges, DoCheck{

  @Input() email = '';
  @Input() temp: any;

  isOnChangesCalled: string[]= [];
  isDoCheckCalled: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.isOnChangesCalled.push("Child ngOnChange is called");
    console.log("Child ngOnChange Is called");
  }

  ngDoCheck(): void {
    this.isDoCheckCalled.push("Child ngDoCheck Is called");
    console.log("Child ngDoCheck is callled");
  }
}
