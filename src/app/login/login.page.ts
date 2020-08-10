import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { ToastService } from '../service/toast/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formData: any = {};

  constructor(
    public auth: AngularFireAuth,
    private toastService: ToastService,
    private router: Router,

  ) { }

  ngOnInit() {
    this.checkAuth()
  }

  checkAuth(){
    let status = localStorage.getItem('signedIn')
    if(status == 'true'){
      this.router.navigate(['/gallery-home'])
    }
  }

  async login(){
    try {
      const res = await this.auth.signInWithEmailAndPassword(this.formData.username + '@gmail.com', this.formData.password);
      localStorage.setItem('signedIn', 'true');
      this.formData.username = '';
      this.formData.password = '';
      this.router.navigate(['/gallery-home']);
    } catch (error) {
      this.toastService.displayToast(error.message);    
    }
  }
}
