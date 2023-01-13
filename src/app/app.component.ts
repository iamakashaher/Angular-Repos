import { ChangeDetectorRef, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
