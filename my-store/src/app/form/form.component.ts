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
  submitValidator() {
    console.log('Hola muy buenas dias');
  }
  onRegister() {
    console.log(this.register);
  }
}
