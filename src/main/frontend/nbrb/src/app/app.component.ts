import {Component} from '@angular/core';
import stringMatching = jasmine.stringMatching;
import {UsersService} from "./users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]

})
export class AppComponent {

}
