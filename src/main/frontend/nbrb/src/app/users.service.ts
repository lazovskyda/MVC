
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService{
  constructor(private http: HttpClient){

  }

  getUsers(){
    return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb')
      .map(response => response.results)
      .map(users => {
        return users.map(user => {
          return{
            name: user.name.first + ' ' + user.name.last,
            image: user.picture.large,
            geo: user.location.city + ' ' + user.location.state
          }
        })
      })
  }

}
