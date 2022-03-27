import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Tree } from './tree.model';
import { TreeService } from '../services/tree.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.page.html',
  styleUrls: ['./tree.page.scss'],
})
export class TreePage implements OnInit {

  trees?: Tree[];

  constructor(private treeService: TreeService,  private route: Router) { }

  ngOnInit() {
    this.getAllTrees();
  }
  getAllTrees(){
    this.treeService.getAll()
      .subscribe({
        next: (data) => {
          this.trees = data;
        },
        error: (e) => console.error(e)
      });
  }

  buttonClick(){
    this.route.navigate(['/bird']);
  }

}
