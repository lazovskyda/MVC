import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  // title = 'My title';
  // title2 = 'Second title';

  public users = [];
  public searchStr = '';

  constructor(private usersService: UsersService){

  }
  ngOnInit(){
    this.usersService.getUsers().subscribe( users => {
      this.users = users;
    });
  }
}
