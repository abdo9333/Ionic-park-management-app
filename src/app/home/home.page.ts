import { Component } from '@angular/core';
import {
  BarcodeScanner,
  BarcodeScannerOptions,
} from '@ionic-native/barcode-scanner/ngx';
import { Router } from '@angular/router';
import { ViewChild, ElementRef } from '@angular/core';

declare let google;

interface Marker {
  position: {
    lat: number;
    lng: number;
  };
  title: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  map: any;
  markers: Marker[] = [
    {
      position: {
        lat: 45.834731,
        lng: 1.237997,
      },
      title: 'Sentier Arbre',
    },
    {
      position: {
        lat: 45.83586,
        lng: 1.237223,
      },
      title: 'Sentier bird',
    },
    {
      position: {
        lat: 45.835909,
        lng: 1.236227,
      },
      title: 'Sentier Sport',
    },
    {
      position: {
        lat: 45.834933,
        lng: 1.235905,
      },
      title: 'Sentier Handicap',
    },
  ];

  encodedData: any;
  scannedBarCode: any;
  barcodeScannerOptions: BarcodeScannerOptions;

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;

  constructor(private scanner: BarcodeScanner, private route: Router) {
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true,
    };
  }

  scanBRcode() {
    this.scanner
      .scan()
      .then((res) => {
        this.scannedBarCode = res;
      })
      .catch((err) => {
        alert(err);
      });
  }

  openLink(link: any) {
    this.route.navigate([link]);
  }

  ionViewDidEnter() {
    this.showMap();
  }

  showMap() {
    const location = new google.maps.LatLng(
      45.83760303980185,
      1.238452736127495
    );
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true,
    };
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.renderMarkers();
  }

  renderMarkers() {
    this.markers.forEach((marker) => {
      this.addMarker(marker);
    });
  }
  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title,
    });
  }
}
