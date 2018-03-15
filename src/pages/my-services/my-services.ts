import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallHistoryPage } from '../call-history/call-history';
import { TopupHistoryPage } from '../topup-history/topup-history';
import { ServiceDetailPage } from '../service-detail/service-detail';
import { ServiceBundlePage } from '../service-bundle/service-bundle';

/**
 * Generated class for the MyServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-services',
  templateUrl: 'my-services.html',
})
export class MyServicesPage {

  public service_Data = [
    { "type": "GSM", "number": "04155188882", "date": "12, March 2017", "status": "Open", "plan": "Saver1" },
    { "type": "GSM", "number": "04155188882", "date": "12, March 2017", "status": "Open", "plan": "Saver1" },
    { "type": "GSM", "number": "04155188882", "date": "12, March 2017", "status": "Open", "plan": "Saver1" },
    { "type": "GSM", "number": "04155188882", "date": "12, March 2017", "status": "Open", "plan": "Saver1" }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyServicesPage');
  }

  goto_callHistory() {
    this.navCtrl.push(CallHistoryPage);
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
