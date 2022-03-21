import { Component, OnInit } from '@angular/core';
import { BirdService } from '../services/bird.service';
import { Bird } from './bird.model';

@Component({
  selector: 'app-bird',
  templateUrl: './bird.page.html',
  styleUrls: ['./bird.page.scss'],
})
export class BirdPage implements OnInit {

  bird?: Bird[];

  constructor(private birdService: BirdService) { }

  ngOnInit() {
    this.getAllBirds();
  }
  getAllBirds(){
    this.birdService.getAll()
      .subscribe({
        next: (data) => {
          this.bird = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
