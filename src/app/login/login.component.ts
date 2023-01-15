import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

 

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      mail: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.http.post<any>('http://localhost:8000/api/public/connect', this.loginForm.value)
      .subscribe(
        response => {
          alert('Connect succesful');
          this.loginForm.reset()
          this.router.navigate(['http://localhost:4200/']);
        },
        error => {
          console.log(error);
          alert('Invalid email or password');
        }
      );
  }
}