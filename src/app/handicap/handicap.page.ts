import { Component, OnInit } from '@angular/core';
import { HandicapService } from '../services/handicap.service';
import { Handicap } from './handicap.model';
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
  selector: 'app-handicap',
  templateUrl: './handicap.page.html',
  styleUrls: ['./handicap.page.scss'],
})
export class HandicapPage implements OnInit {
  map: any;

  handicap?: Handicap[];

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;

  constructor(private handicapService: HandicapService) {}

  ngOnInit() {
    this.getAllHandicaps();
  }
  getAllHandicaps() {
    this.handicapService.getAll().subscribe({
      next: (data) => {
        this.handicap = data;
      },
      error: (e) => console.error(e),
    });
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
    const marker = {
      position: {
        lat: 45.834933,
        lng: 1.235905,
      },
      title: 'Sentier Handicap',
    };
    this.addMarker(marker);
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title,
    });
  }
}
