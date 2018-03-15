import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl, Validators } from '@angular/forms';

/**
 * Generated class for the TopUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-top-up',
  templateUrl: 'top-up.html',
})
export class TopUpPage {

  public top_Data = { "topup": "", "start_date": "", "method": "" };

  selType = new FormControl('', [Validators.required]);

  setMethod = new FormControl('', [Validators.required]);

  selExy = new FormControl('', [Validators.required]);

  changeDate = new FormControl('', [Validators.required]);

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopUpPage');
  }

  completeAddCompany(comProfileForm) {
    if (comProfileForm.valid && this.setMethod.valid && this.selType.valid && this.changeDate.valid) {
      alert("asdfasdfas");
    }
  }

  goback() {
    this.navCtrl.pop();
  }

  add_new(){
    console.log("asdfasd");
  }

}
