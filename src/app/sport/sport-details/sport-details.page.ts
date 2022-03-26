import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sport } from '../sport.model';
import { SportService } from 'src/app/services/sport.service';

@Component({
  selector: 'app-sport-details',
  templateUrl: './sport-details.page.html',
  styleUrls: ['./sport-details.page.scss'],
})
export class SportDetailsPage implements OnInit {

  @Input() currentSport: Sport = {
    id:'',
    name: '',
    discription: '',
    categorie:''
  };

  constructor(private activatedRoute: ActivatedRoute, private sportService: SportService) { }

  ngOnInit() {
    this.getSport(this.activatedRoute.snapshot.params.id);
  }

  getSport(id: string): void {
    this.sportService.get(id)
      .subscribe({
        next: (data) => {
          this.currentSport = data;
        },
        error: (e) => console.error(e)
      });
  }


}
