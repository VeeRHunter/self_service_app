import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopupHistoryPage');
  }
  goto_newTopup() {

  }
  goback() {
    this.navCtrl.pop();
  }

}
