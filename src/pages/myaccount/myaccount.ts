import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BillHistoryPage } from '../bill-history/bill-history';
import { TransactionHistoryPage } from '../transaction-history/transaction-history';
import { PaymentMethodPage } from '../payment-method/payment-method';
import { PayNowPage } from '../pay-now/pay-now';

/**
 * Generated class for the MyaccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myaccount',
  templateUrl: 'myaccount.html',
})
export class MyaccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyaccountPage');
  }
  goto_billHistory() {
    this.navCtrl.push(BillHistoryPage);
  }
  goto_transactionHistory() {
    this.navCtrl.push(TransactionHistoryPage);
  }
  goto_paymentHistory() {
    this.navCtrl.push(PaymentMethodPage);
  }
  goto_payNow() {
    this.navCtrl.push(PayNowPage);
  }

}
