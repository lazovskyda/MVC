import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent{
  @Input() public user:any;

  private isMarked:boolean = false;

  onClick(){
    console.log("click");
    this.isMarked = true;

  }

}

