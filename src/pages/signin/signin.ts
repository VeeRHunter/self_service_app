import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';

import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { SignupPage } from '../signup/signup';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})


// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }


export class SigninPage {

  public user_Data = { "username": "", "password": "" };

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  // matcher = new MyErrorStateMatcher();

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }
  goto_home() {
    if (this.user_Data.username == "" || this.user_Data.password == "") {
      let toast = this.toastCtrl.create({
        message: 'Please input full data',
        duration: 3000,
        position: 'top'
      });

      toast.present();
    } else {
      this.navCtrl.push(HomePage);
    }
  }

  completeAddCompany(comProfileForm) {
    if (comProfileForm.valid) {
      this.navCtrl.push(HomePage);
    }
  }
  
  goto_signup(){
    this.navCtrl.push(SignupPage);
  }


}
