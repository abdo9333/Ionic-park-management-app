import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage {

  encodedData: any;
  scannedBarCode: any;
  barcodeScannerOptions: BarcodeScannerOptions;
  constructor(private scanner: BarcodeScanner, private route: Router)
  {
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
  }

  scanBRcode() {
    this.scanner.scan().then(res => {
        this.scannedBarCode = res;
      }).catch(err => {
        alert(err);
      });
  }

  openLink(link: any) {
    this.route.navigate([link]);
  }

  buttonClick(){
    this.route.navigate(['/bird']);
  }

}
