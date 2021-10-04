import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { filter } from 'rxjs/operators';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs';

  ngOnInit() {
    const numbers$ = interval(1000).pipe(take(5));
    const letters$ = of('a', 'b', 'c', 'd', 'e');

    letters$.pipe(
      switchMap(x =>
        numbers$
          .pipe(take(5))
          .pipe(map(i => i + x))
      )
    ).subscribe(x => console.log(x));
  }

  ngOnDestroy() {

  }
}
