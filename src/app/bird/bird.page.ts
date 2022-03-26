import { Component, OnInit } from '@angular/core';
import { BirdService } from '../services/bird.service';
import { Bird } from './bird.model';
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
  selector: 'app-bird',
  templateUrl: './bird.page.html',
  styleUrls: ['./bird.page.scss'],
})
export class BirdPage implements OnInit {
  map: any;

  bird?: Bird[];

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;

  constructor(private birdService: BirdService) {}

  ngOnInit() {
    this.getAllBirds();
  }
  getAllBirds() {
    this.birdService.getAll().subscribe({
      next: (data) => {
        this.bird = data;
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
        lat: 45.83586,
        lng: 1.237223,
      },
      title: 'Sentier Bird',
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
