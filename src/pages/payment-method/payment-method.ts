import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NewPaymentPage } from '../new-payment/new-payment';

/**
 * Generated class for the PaymentMethodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment-method',
  templateUrl: 'payment-method.html',
})
export class PaymentMethodPage {


  public detail_Data = [
    { "name": "katie hazel", "type": "visa", "number": "4164xxxxxxxx1680", "expiry": "30/17", "status": "Open" },
    { "name": "Gorden Gielis", "type": "visa", "number": "4564xxxxxxxx7113", "expiry": "30/20", "status": "Open" }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentMethodPage');
  }
  goback(){
    this.navCtrl.pop();
  }
  goto_newPayment(){
    this.navCtrl.push(NewPaymentPage);
  }

}
