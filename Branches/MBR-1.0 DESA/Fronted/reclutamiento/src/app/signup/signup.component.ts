import { Component, OnInit } from '@angular/core';
import { DEPARTAMENTOS } from '../Datos';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public departamentos: any = DEPARTAMENTOS;

  formRegistro: FormGroup;

  constructor() {

    this.formRegistro = new FormGroup({
      nombres: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      correo: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      departamento: new FormControl('', Validators.required)
    });

  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formRegistro);
  }

}
