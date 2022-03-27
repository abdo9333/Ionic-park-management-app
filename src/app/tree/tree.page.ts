import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Tree } from './tree.model';
import { TreeService } from '../services/tree.service';
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
  selector: 'app-tree',
  templateUrl: './tree.page.html',
  styleUrls: ['./tree.page.scss'],
})
export class TreePage implements OnInit {
  map: any;

  trees?: Tree[];

  constructor(private treeService: TreeService,  private route: Router) { }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;



  ngOnInit() {
    this.getAllTrees();
  }
  getAllTrees() {
    this.treeService.getAll().subscribe({
      next: (data) => {
        this.trees = data;
      },
      error: (e) => console.error(e),
    });
  }
  ionViewDidEnter() {
    this.showMap();
  }

  buttonClick(){
    this.route.navigate(['/bird']);
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
        lat: 45.834731,
        lng: 1.237997,
      },
      title: 'Sentier Tree',
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
