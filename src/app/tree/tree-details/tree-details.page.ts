import { Tree } from './../tree.model';
import { TreeService } from '../../services/tree.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tree-details',
  templateUrl: './tree-details.page.html',
  styleUrls: ['./tree-details.page.scss'],
})
export class TreeDetailsPage implements OnInit {


  @Input() currentTree: Tree = {
    id:'',
    name: '',
    discription: '',
    historique: ''
  };

  constructor(private activatedRoute: ActivatedRoute, private treeService: TreeService) { }

  ngOnInit() {

    this.getTree(this.activatedRoute.snapshot.params.id);
  }

  getTree(id: string): void {
    this.treeService.get(id)
      .subscribe({
        next: (data) => {
          this.currentTree = data;
        },
        error: (e) => console.error(e)
      });
  }

}
