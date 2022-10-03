import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() height: string = '45px';
  @Input() minWidth: string = '80px';
  @Input() bc: string = 'white';
  @Input() radius: string = '9px';
  @Input() txtc: string = 'black';
  

  constructor() { }

  ngOnInit(): void {
  }

}
