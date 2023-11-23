import { Component, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input() title: string = "";
  i: number = 1;

  //to get access to dataservice
  constructor(private dataService: DataService, private userService: UserService) {}
  onClick() {
    if(this.title.match("Add New Item")) {
      console.log("Add Button");
      this.dataService.addItem("New Item" + this.i);
      this.i++;
    } else if(this.title.match("Remove Item")) {
      console.log("Remove Button");
      this.dataService.removeItem();
    }
  }

  // ex2
  onClickHttp() {
    this.userService.getPost().subscribe(data => console.log(data.body));
  }
}
