import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountComponent {
  @Input() Counter: any;
  count: any;
  countSubscription: Subscription;

  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit(){
    this.countSubscription = this.Counter.subscribe((data: any) => {
      this.count = data.count;
      console.log(this.count);
      this.cd.markForCheck();
    },
    (err: any) => {
      console.log(err);
    })
  }

  ngOnDestroy(){
    this.countSubscription.unsubscribe();
  }

}
