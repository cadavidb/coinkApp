import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Loading } from 'src/app/modules/core/utils/modals.utils';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./styles/login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  hide: boolean = true;
  loading:boolean=false;
  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {

  }

  login() {
    this.loading=true;
    setTimeout(() => {
      this.loading=false;
      this.router.navigate(['/dashboard']);
    }, 1000);
  }
}
