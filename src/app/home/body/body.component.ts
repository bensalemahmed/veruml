import { Component, OnInit, ChangeDetectorRef, Input, ElementRef, HostListener } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  linkList =[];
  list = [1 ];
  pos = [];
  constructor(private apiService: ApiService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.apiService.addElemet.subscribe((val: any) => {
      if (val.x) {
        val.y = val.y - (209 * this.list.length);
        val.x -= 50;
        this.pos.push(val);
        console.log(val);
        this.list.push(this.list[this.list.length - 1] + 1 || 1);
      }
    })
    this.apiService.addLink.subscribe((data: any) => {
      
    console.log (data,"body aaaa")
    })
  }

  add() {
    this.list.push(this.list[this.list.length - 1] + 1);
  }

  dragStarted(event) {
    console.log(event);
  }
  effas(i) {
    console.log(this.list, i)
    this.list.splice(i, 1);

  }
}