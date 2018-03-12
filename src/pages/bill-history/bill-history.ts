import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BillHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bill-history',
  templateUrl: 'bill-history.html',
})
export class BillHistoryPage {

  public detail_Data = [
    { "bill_num": 10232, "due_date": "12, March, 2017", "amount_owin": "250.80" },
    { "bill_num": 40135, "due_date": "25, July, 2017", "amount_owin": "120.20" },
    { "bill_num": 20462, "due_date": "10, January, 2017", "amount_owin": "540.30" },
    { "bill_num": 30135, "due_date": "24, April 2017", "amount_owin": "250.80" },
    { "bill_num": 10232, "due_date": "12 March 2017", "amount_owin": "250.80" },
    { "bill_num": 10232, "due_date": "12 March 2017", "amount_owin": "250.80" },
    { "bill_num": 10232, "due_date": "12 March 2017", "amount_owin": "250.80" },
    { "bill_num": 10232, "due_date": "12 March 2017", "amount_owin": "250.80" }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BillHistoryPage');
  }

  goback() {
    this.navCtrl.pop();
  }

}
