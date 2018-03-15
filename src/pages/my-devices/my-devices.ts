import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TransactionHistoryPage } from '../transaction-history/transaction-history';
import { TopupHistoryPage } from '../topup-history/topup-history';
import { ServiceDetailPage } from '../service-detail/service-detail';
import { ServiceBundlePage } from '../service-bundle/service-bundle';

/**
 * Generated class for the MyDevicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-devices',
  templateUrl: 'my-devices.html',
})
export class MyDevicesPage {

  public device_Data = [
    { "type": "GSM", "device_id": "041523", "date": "12, March 2017", "status": "Open", "plan": "Saver1" },
    { "type": "GSM", "device_id": "041523", "date": "12, March 2017", "status": "Open", "plan": "Saver1" },
    { "type": "GSM", "device_id": "041523", "date": "12, March 2017", "status": "Open", "plan": "Saver1" },
    { "type": "GSM", "device_id": "041523", "date": "12, March 2017", "status": "Open", "plan": "Saver1" }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyDevicesPage');
  }

  goto_transactionHistory() {
    this.navCtrl.push(TransactionHistoryPage);
  }

  goto_topupHistory() {
    this.navCtrl.push(TopupHistoryPage);
  }

  goto_serviceDetail(){
    this.navCtrl.push(ServiceDetailPage);
  }

  goto_serviceBundle(){
    this.navCtrl.push(ServiceBundlePage);
  }

}
