import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tree',
    children:[
      {
        path:'',
        loadChildren: () => import('./tree/tree.module').then( m => m.TreePageModule)
      },
      {
        path:':id',
        loadChildren: () => import('./tree/tree-details/tree-details.module').then( m => m.TreeDetailsPageModule)
      }
     ]
  },
  {
    path: 'bird',
    children:[
      {
        path: '',
    loadChildren: () => import('./bird/bird.module').then( m => m.BirdPageModule)
      },
      {
        path:':id',
        loadChildren: () => import('./bird/bird-details/bird-details.module').then( m => m.BirdDetailsPageModule)

      }
    ]
  },
  {
    path: 'sport',
    children:[
      {
        path: '',
        loadChildren: () => import('./sport/sport.module').then( m => m.SportPageModule)
      },
      {
        path:':id',
        loadChildren: () => import('./sport/sport-details/sport-details.module').then( m => m.SportDetailsPageModule)

      }
    ]
  },
  {
    path: 'handicap',
    children:[
      {
        path: '',
        loadChildren: () => import('./handicap/handicap.module').then( m => m.HandicapPageModule)
      },
      {
        path:':id',
        loadChildren: () => import('./handicap/handicap-details/handicap-details.module').then( m => m.HandicapDetailsPageModule)

      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
