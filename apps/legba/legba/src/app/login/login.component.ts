import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'pajuani-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  identifierForm: FormGroup;
  passWordForm: FormGroup;

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.createForm();
  }

  findUser() {
    console.log(this.identifierForm.value);
  }

  private createForm() {
    this.identifierForm = this.formBuilder.group({
      identifier: ['', Validators.required]
    });

    this.passWordForm = this.formBuilder.group({
      password: ['', Validators.required],
      remember: true
    });
  }

}
