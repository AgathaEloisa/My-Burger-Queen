import { Menu } from './../db/menu/menu';
import { MenuModel } from '../db/menu/menu-model';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor( private db: AngularFirestore ) { }

  private MenuCollectionName = 'menu';

  getMenu(): Observable<firebase.firestore.QuerySnapshot> {
    return this.db.collection<Menu>(this.MenuCollectionName, ref => ref.orderBy('lastModifiedDate', 'desc')).get();
  }
}
