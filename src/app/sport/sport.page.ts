import { SportService } from '../services/sport.service';
import { Component, OnInit } from '@angular/core';
import { Sport } from './sport.model';
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
  selector: 'app-sport',
  templateUrl: './sport.page.html',
  styleUrls: ['./sport.page.scss'],
})
export class SportPage implements OnInit {
  map: any;

  sport?: Sport[];

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;

  constructor(private sportService: SportService) {}

  ngOnInit() {
    this.getAllSports();
  }
  getAllSports() {
    this.sportService.getAll().subscribe({
      next: (data) => {
        this.sport = data;
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
        lat: 45.835909,
        lng: 1.236227,
      },
      title: 'Sentier Sport',
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

