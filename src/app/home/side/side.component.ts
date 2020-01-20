import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {
  showModalBox: boolean = false;
  entity = [
    {
      title: 'New Entity',
      poster: './../../../assets/images.png'
    },



  ];
  association = [

    {
      title: 'New Association',
      poster: './../../../assets/assos.gif'
    },


  ];

  pos = { x: 0, y: 0 };

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }


  dragStarted(event) {
    console.log(event);
    this.pos = event.pointerPosition;
    this.pos.x -= 365;
  }
  createFreeDrag(event) {
    // console.log(event);
    this.apiService.addElemet.next(this.pos);
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  //link part
  from: any[] = [
    { id: 1, name: 'one' },
    { id: 2, name: 'two' },
    { id: 3, name: 'three' },
    { id: 4, name: 'four' },
    { id: 5, name: 'five' },
    { id: 6, name: 'six' }
  ];
  to: any[] = [
    { id: 1, name: 'one' },
    { id: 2, name: 'two' },
    { id: 3, name: 'three' },
    { id: 4, name: 'four' },
    { id: 5, name: 'five' },
    { id: 6, name: 'six' }
  ];
  link: any;
  selectedFrom: number = 1;
  selectedTo: number = 1;

  selectOption(id: number) {

    this.link = { from: this.selectedFrom * 1, to: this.selectedTo * 1 }

  }
  creatLink() {
    console.log(this.link)
    this.apiService.addLink.next(this.link);
  }
  startFromTo(event) {
    if (event) {
      console.log("salem");
    }


  }

}