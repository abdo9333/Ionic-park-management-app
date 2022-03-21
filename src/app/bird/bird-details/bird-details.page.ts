import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bird } from '../bird.model';
import { BirdService } from 'src/app/services/bird.service';


@Component({
  selector: 'app-bird-details',
  templateUrl: './bird-details.page.html',
  styleUrls: ['./bird-details.page.scss'],
})
export class BirdDetailsPage implements OnInit {

  LoadBird: Bird;

  @Input() currentBird: Bird = {
    name: '',
    discription: '',
    species: ''
  };

  constructor(private activatedRoute: ActivatedRoute, private birdService: BirdService) { }

  ngOnInit() {
    this.getBird(this.activatedRoute.snapshot.params.id);
  }
  getBird(id: string): void {
    this.birdService.get(id)
      .subscribe({
        next: (data) => {
          this.currentBird = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
