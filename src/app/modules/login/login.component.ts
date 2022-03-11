import { Component, OnInit } from '@angular/core';

import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
// import { AuthService } from 'app/shared/auth/auth.service';
import { environment } from 'environments/environment';
// import { ToastrService } from 'ngx-toastr';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    // private toast: ToastrService
    // private auth: AuthService, 
    ) {
      this.loginForm = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      });
     }

  ngOnInit(): void {
  }
  login() {
    if (this.loginForm.valid) {

        console.log('este es el value',this.loginForm.value)
      if(this.loginForm.value.email=='admin@example.com' && this.loginForm.value.password=='1234'){
        this.router.navigate(['list'], { relativeTo: this.route.parent });
      }else{
        Swal.fire({
          title: 'Error!',
          text: 'Usuario o contraseña invalido',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      
      }
    }
  }

  // On submit button click
  onSubmit() {}
  // On Forgot password link click
  onForgotPassword() {
    this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
  }
  // On registration link click
  onRegister() {
    this.router.navigate(['register'], { relativeTo: this.route.parent });
  }


}
