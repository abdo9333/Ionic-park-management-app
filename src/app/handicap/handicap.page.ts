import { Component, OnInit } from '@angular/core';
import { HandicapService } from '../services/handicap.service';
import { Handicap } from './handicap.model';
@Component({
  selector: 'app-handicap',
  templateUrl: './handicap.page.html',
  styleUrls: ['./handicap.page.scss'],
})
export class HandicapPage implements OnInit {

  handicap?: Handicap[];

  constructor(private handicapService: HandicapService) { }

  ngOnInit() {
    this.getAllHandicaps();
  }
  getAllHandicaps(){
    this.handicapService.getAll()
    .subscribe({
      next: (data) => {
        this.handicap = data;
      },
      error: (e) => console.error(e)
    });

  }

}
