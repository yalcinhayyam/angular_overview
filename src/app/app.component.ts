import { Component, Injectable, Signal, inject, signal } from '@angular/core';
import { BehaviorSubject, Observable, firstValueFrom } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { AppService } from './services/app.service';
import { Course } from './models/course';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular_overview';

  courses$: Observable<Course[]>;
  data = signal(10);
  appServiceWithInject = inject(AppService);

  signalFromSubject: Signal<Course[] | undefined>;
  constructor(private readonly service: AppService) {
    this.courses$ = service.getCourses();

    service.addCourse(Course.Create('C#', new Date(), new Date()));

    service.addParcipantToCourse('C#', 'Faruk');
    this.signalFromSubject = toSignal(this.courses$);

    this.appServiceWithInject
      .getCourses()
      .subscribe(console.log);

    this.data.update((x) => x + 10);
  }
}
