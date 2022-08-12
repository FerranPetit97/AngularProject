import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  register = {
    name: '',
    email: '',
    password: '',
  };
  onRegister() {
    console.log(this.register);
  }
}
