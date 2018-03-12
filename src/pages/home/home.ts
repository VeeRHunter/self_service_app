import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MydetailPage } from '../mydetail/mydetail';
import { MyaccountPage } from '../myaccount/myaccount';
import { MyServicesPage } from '../my-services/my-services';
import { MyDevicesPage } from '../my-devices/my-devices';
import { PayNowPage } from '../pay-now/pay-now';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  goto_mydetail() {
    this.navCtrl.push(MydetailPage);
  }
  goto_myaccount() {
    this.navCtrl.push(MyaccountPage);
  }
  goto_myservice() {
    this.navCtrl.push(MyServicesPage);
  }
  goto_mydevice() {
    this.navCtrl.push(MyDevicesPage);
  }goto_paynow(){
    this.navCtrl.push(PayNowPage);
  }

}
