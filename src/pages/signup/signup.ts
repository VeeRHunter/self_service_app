import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { SigninPage } from '../signin/signin';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  public user_Data = { "username": "", "password": "", "email": "", "phone": "", "confirm": "" };
  public confirm_state: boolean;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
    this.confirm_state = true;
  }

  completeAddCompany(comProfileForm) {
    if (comProfileForm.valid && this.emailFormControl.valid) {
      this.navCtrl.push(SigninPage);
    }
  }

  set_confirm() {
    console.log(this.confirm_state);
    console.log(this.user_Data);
    if (this.user_Data.password != this.user_Data.confirm) {
      this.confirm_state = true;
    } else {
      this.confirm_state = false;
    }
  }
  goto_signin(){
    this.navCtrl.pop();
  }

}
