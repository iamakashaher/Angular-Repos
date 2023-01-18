import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-changeDetection',
  templateUrl: './changeDetection.component.html',
  styleUrls: ['./changeDetection.component.css']
})
export class ChangeDetectionComponent implements OnInit {

  title = 'changeDetection';
  timer: any = 0;
  _count = 0;
  Counter: any;

  incCount() {
    // this.count = this.count + 1;
    this.Counter.next({
      count: ++this._count
    });
  }

  constructor(private cdr: ChangeDetectorRef) {
    // this.cdr.detach();
  }

  ngOnInit() {
    // setInterval(() => {
    //   this.timer += 1;
    //   console.log(this.timer);
    // }, 200);

    this.Counter = new BehaviorSubject({
      count: 0
    })

  }


}
