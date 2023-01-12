import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'changeDetection';
  timer: any = 0;

  constructor(private cdr: ChangeDetectorRef) {
    this.cdr.detach();
  }

  ngOnInit() {
    setInterval(() => {
      this.timer += 1;
      console.log(this.timer);
    }, 200);
  }

}
