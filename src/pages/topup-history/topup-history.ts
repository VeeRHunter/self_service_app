import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { ApiproviderProvider } from '../../providers/apiprovider/apiprovider';


import { TranslateService } from '@ngx-translate/core';


/**
 * Generated class for the TopupHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-topup-history',
  templateUrl: 'topup-history.html',
})
export class TopupHistoryPage {

  public top_Data = [
    { "top": "3GB Unlimited", "date": "12, March, 2017 10:12 am", "expiry": "12/04/2017", "status": "Open" },
    { "top": "3GB Unlimited", "date": "12, March, 2017 10:12 am", "expiry": "12/04/2017", "status": "Open" },
    { "top": "3GB Unlimited", "date": "12, March, 2017 10:12 am", "expiry": "12/04/2017", "status": "Open" },
    { "top": "3GB Unlimited", "date": "12, March, 2017 10:12 am", "expiry": "12/04/2017", "status": "Open" },
    { "top": "3GB Unlimited", "date": "12, March, 2017 10:12 am", "expiry": "12/04/2017", "status": "Open" },
    { "top": "3GB Unlimited", "date": "12, March, 2017 10:12 am", "expiry": "12/04/2017", "status": "Open" },
    { "top": "3GB Unlimited", "date": "12, March, 2017 10:12 am", "expiry": "12/04/2017", "status": "Open" },
    { "top": "3GB Unlimited", "date": "12, March, 2017 10:12 am", "expiry": "12/04/2017", "status": "Open" }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public toastCtrl: ToastController,
    public apiprovider: ApiproviderProvider, public translate: TranslateService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopupHistoryPage');
    this.ionicInit();
  }
  goto_newTopup() {

  }
  goback() {
    this.navCtrl.pop();
  }

  ionicInit() {
    console.log(localStorage.getItem("set_lng"));
    if (typeof (localStorage.getItem("set_lng")) == "undefined" || localStorage.getItem("set_lng") == "" || localStorage.getItem("set_lng") == null) {
      this.translate.use('en');
    } else {
      this.translate.use(localStorage.getItem("set_lng"));
    }
  }

}
