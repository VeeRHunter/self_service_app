import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { ApiproviderProvider } from '../../providers/apiprovider/apiprovider';

/**
 * Generated class for the MydetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mydetail',
  templateUrl: 'mydetail.html',
})
export class MydetailPage {

  public user_Data = { "username": "", "address": "", "email": "", "phone": "", "status": "" };

  public send_data: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public toastCtrl: ToastController,
    public apiprovider: ApiproviderProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MydetailPage');
    this.ionicInit();
  }

  ionicInit() {

    this.user_Data.email = localStorage.getItem("user_email");

    let loading = this.loadingCtrl.create({
      content: "Please Wait..."
    });
    loading.present();
    let status = "get_detail";
    this.user_Data.status = status;
    this.send_data = new Array();
    this.send_data.push(this.user_Data);
    console.log(this.user_Data);
    this.apiprovider.postData(this.send_data).then((result) => {
      console.log(Object(result));
      loading.dismiss();
      if (Object(result).status == "success") {
        this.user_Data.address = Object(result).detail.address;
        this.user_Data.phone = Object(result).detail.phone;
        this.user_Data.username = Object(result).detail.username;
        console.log(this.user_Data);

        // this.navCtrl.push(HomePage);
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
