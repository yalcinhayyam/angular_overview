import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private courses: BehaviorSubject<Course[]>;
  constructor(/*private readonly _client: HttpClient*/) {
    this.courses = new BehaviorSubject<Course[]>([]);
  }

  getCourses(): Observable<Course[]> {
    return this.courses.asObservable();
  }

  addCourse(course: Course): void {
    this.courses.next([...this.courses.value, course]);
  }

  addParcipantToCourse(courseName:string,parcipant: string): void {
    var course = this.courses.value.find(course=> course.Name == courseName)
    course?.addParcipant(parcipant)
  }
}

@Injectable({
  providedIn: 'root',
})
export class AnotherService {
 
}
