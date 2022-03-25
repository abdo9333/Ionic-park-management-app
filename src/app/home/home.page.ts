import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Component } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

import { AlertController } from '@ionic/angular';
import {  NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Deeplinks } from '@awesome-cordova-plugins/deeplinks/ngx';
import { TreePage } from '../tree/tree.page';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  scanActive?: boolean = false;
  public textScanned?: string = '/tree/8';

  constructor(private iab: InAppBrowser,
    public alertController: AlertController,
    private router: Router,
    private zone: NgZone,
    private route: ActivatedRoute,
    private deeplinks: Deeplinks
    ) {}


  async checkPermission() {
    return new Promise(async (resolve, reject) => {
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        resolve(true);
      } else if (status.denied) {
        BarcodeScanner.openAppSettings();
        resolve(false);
      }
    });
  }

  async startScanner() {
    const allowed = await this.checkPermission();

    if (allowed) {
      this.scanActive = true;
     // BarcodeScanner.hideBackground();
      BarcodeScanner.showBackground();

      const result = await BarcodeScanner.startScan();

      if (result.hasContent) {
        this.scanActive = false;
         //The QR content will come out here
        //Handle the data as your heart desires here
        this.textScanned = result.content;
      } else {
        alert('NO DATA FOUND!');
      }
    } else {
      alert('NOT ALLOWED!');
    }
  }

  stopScanner() {
    BarcodeScanner.stopScan();
    this.scanActive = false;
  }

  ionViewWillLeave() {
    BarcodeScanner.stopScan();
    this.scanActive = false;
  }
  openLink(link: any) {
    this.route.url.pipe(link);
  }

}
