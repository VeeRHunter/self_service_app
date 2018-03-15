import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

/**
 * Generated class for the ServiceBundlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service-bundle',
  templateUrl: 'service-bundle.html',
})
export class ServiceBundlePage {

  @ViewChild('barCanvas') barCanvas;
  barChart: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceBundlePage');
    this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'pie',
      chart: {
        "caption": "Electronics Selling",
        "subCaption": "Top 5 stores in last month by revenue",
        "numberprefix": "Rs.(Crore) ",
        "theme": "fint"
      },
      data: {
        labels: ["SMS/MMS", "Calls", "Data", "Non/Usage"],
        globals: {
          shadow: false,
          fontFamily: "Verdana",
          fontWeight: "100"
        },
        datasets: [{
          label: '# of Votes',
          data: [120, 190, 300, 500],
          backgroundColor: [
            'rgba(255, 0, 0, 1)',
            'rgba(0, 255, 0, 1)',
            'rgba(0, 0, 255, 1)',
            'rgba(255, 206, 86, 1)'
          ],

          legend: {
            layout: "x5",
            position: "50%",
            text: "asdf",
            borderColor: "transparent",
            marker: {
              borderRadius: 10,
              borderColor: "transparent"
            }
          },
          options: {
            maintainAspectRatio: false,
            layout: {
              padding: {
                left: 50,
                right: 0,
                top: 0,
                bottom: 0
              }
            },
            animation: {
              duration: 5000
            }
          },
          borderColor: [
            'rgba(255, 0, 0, 1)',
            'rgba(0, 255, 0, 1)',
            'rgba(0, 0, 255, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },

    });

  }

  goback(){
    this.navCtrl.pop();
  }

}
