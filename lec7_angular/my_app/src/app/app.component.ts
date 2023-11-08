import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'seneca homepage';

  cardDataaa = [
    {title: "Steve Jobs", age:55},
    {title: "Bill Gates", age:65},
    {title: "Elon Musk", age:45},
    {title: "Warren Buffet", age:-5},
  ];
}
