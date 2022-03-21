import { SportService } from '../services/sport.service';
import { Component, OnInit } from '@angular/core';
import { Sport } from './sport.model';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.page.html',
  styleUrls: ['./sport.page.scss'],
})
export class SportPage implements OnInit {

  sport?: Sport[];

  constructor(private sportService: SportService) { }

  ngOnInit() {
    this.getAllSports();
  }
  getAllSports(){
    this.sportService.getAll()
      .subscribe({
        next: (data) => {
          this.sport = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
