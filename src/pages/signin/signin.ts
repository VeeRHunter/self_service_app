import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';

import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { SignupPage } from '../signup/signup';
import { ApiproviderProvider } from '../../providers/apiprovider/apiprovider';

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

  public user_Data = { "username": "", "password": "", "email": "", "phone": "", "status": "" };

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  // matcher = new MyErrorStateMatcher();


  public send_data: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public toastCtrl: ToastController,
    public apiprovider: ApiproviderProvider) {
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
      // this.navCtrl.push(HomePage);
      let loading = this.loadingCtrl.create({
        content: "Please Wait..."
      });
      this.user_Data.email = this.user_Data.username;
      loading.present();
      let status = "login";
      this.user_Data.status = status;
      this.apiprovider.postData(this.user_Data).then((result) => {
        console.log(Object(result));
        loading.dismiss();
        if (Object(result).status == "success") {
          console.log(result);
          localStorage.setItem("user_email", Object(result).userid);
          this.navCtrl.push(HomePage);
        } else {
          let toast = this.toastCtrl.create({
            message: Object(result).detail,
            duration: 2000
          })
          toast.present();
        };

      }, (err) => {
        let toast = this.toastCtrl.create({
          message: "No Network",
          duration: 2000
        })
        toast.present();
        loading.dismiss();
      });
    }
  }

  goto_signup() {
    this.navCtrl.push(SignupPage);
  }


}
