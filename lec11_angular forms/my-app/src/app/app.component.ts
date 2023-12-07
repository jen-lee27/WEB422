import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';

  name: string="";

  onSubmit(myForm: NgForm) {
    console.log(myForm);
    
    //two-way binding:
    // console.log(myForm.value.name);
    console.log(this.name);
  }

  genders = [
    {id: 'id-male', name: 'gender-radio', value:'Male'},
    {id: 'id-female', name: 'gender-radio', value:'Female'},
    {id: 'id-other', name: 'gender-radio', value:'Other'},
  ];

  logInput() {
    console.log(this.name);
  }
}
