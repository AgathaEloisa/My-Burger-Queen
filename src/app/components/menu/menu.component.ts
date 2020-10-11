import { Menu } from './../../db/menu/menu';
import { MenuService } from './../../services/menu.service';
import { Component, OnInit } from '@angular/core';
/* import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { firestore } from 'firebase'; */


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor( private menuService: MenuService) {
    console.log('menu', this.menuService.getMenu());
  }

/*   menu: MenuViewModel[] = []; */
  // tslint:disable-next-line: typedef
  loadMenu() {
    this.menuService.getMenu().subscribe(res => {
/*       this.menu = [];
 */
res.docs.forEach(value => {
  const data = value.data();
  const id = value.id;
/*   const menuPrint: MenuViewModel = {
    id: id,
    title: data.title,
    description: data.description,
    done: data.done,
    lastModifiedDate: data.lastModifiedDate.toDate()
  }; */
      });
    });
  }
/*   panelOpenState = false; */
/*      items: Observable<any[]>;
    constructor( firestore: AngularFirestore ) { */
  /*     this.items = firestore.collection('menu').doc().valueChanges(); */
/*   const menuDb = firestore.collection('menu').doc('desayuno');
  menuDb.get().then(function(doc) {
    if (doc.exists) {
      console.log('data: ', doc.data());
    } else {
      console.log('no such document');
    }
    }).catch(function(error) {
      console.log('err :', error);
  });

  } */

}
