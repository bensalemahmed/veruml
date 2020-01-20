import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  addElemet: BehaviorSubject<object>;
  addLink: BehaviorSubject<object>;

  constructor() {
    this.addElemet = new BehaviorSubject<object>({});
    this.addLink = new BehaviorSubject<object>({});
  }
}
