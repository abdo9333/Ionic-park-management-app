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

  constructor(private treeService: TreeService) { }

  ngOnInit() {
    this.getAllTrees();
  }
  getAllTrees(){
    this.treeService.getAll()
      .subscribe({
        next: (data) => {
          this.trees = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
