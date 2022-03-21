import { HandicapService } from './../../services/handicap.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Handicap } from '../handicap.model';

@Component({
  selector: 'app-handicap-details',
  templateUrl: './handicap-details.page.html',
  styleUrls: ['./handicap-details.page.scss'],
})
export class HandicapDetailsPage implements OnInit {

  @Input() currentHandicap: Handicap = {
    id:'',
    name: '',
    discription: '',
    historique:''
  };

  constructor(private activatedRoute: ActivatedRoute, private handicapService: HandicapService) { }

  ngOnInit() {
    this.getHandicap(this.activatedRoute.snapshot.params.id);
  }

  getHandicap(id: string): void {
    this.handicapService.get(id)
      .subscribe({
        next: (data) => {
          this.currentHandicap = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
