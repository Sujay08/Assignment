import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { ToastService } from '../service/toast/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formData: any = {};

  constructor(
    public auth: AngularFireAuth,
    private toastService: ToastService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  async register(){
    if(this.formData.password !== this.formData.cPassword){
      console.log('password mismatch')
    } else{
      try {
        const res = await this.auth.createUserWithEmailAndPassword(this.formData.username + '@gmail.com', this.formData.password)
        this.router.navigate(['/']);
      } catch (error) {
        this.toastService.displayToast(error.message);      
      }
    }
  }
}
