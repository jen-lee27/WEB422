import { Component, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  cities: string[] = []; //@Input is no longer needed
    // ex3
    userss: User[] = [];
    @Input() id_ex3: string = "";
  
   //this will create a different instance other than the one that is already provided at root level by angular
  // constructor() {
  //   let dataService = new DataService();
  //   this.cities = dataService.getCities();
  // }

  //instead of the above, use Dependency Injection
  constructor(private dataService: DataService, private userService: UserService) {
    // this.cities = dataService.getCities();

    this.userService.getUsers().subscribe((data: User[]) => {
      this.userss = data;
    })
  }

}
