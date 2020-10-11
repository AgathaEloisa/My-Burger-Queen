import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
/*
export interface Item { item: string; precio: number; } */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Burger Queen';

  constructor( private activatedRoute: ActivatedRoute, private router: Router ) {
    const kk = router.events.subscribe(( url: any ) => console.log(url.value[0]));
    console.log('kk: ', kk);
    /*console.log('router: ', router.url.value[0]);*/

    if ( this.router.url === '/waiter' ) {
    this.title = 'Mesero';
  }
}

}
