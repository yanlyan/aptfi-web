import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppLoadingService {
  private loadingSource = new Subject<boolean>();

  getLoading(): Observable<boolean> {
    return this.loadingSource.asObservable();
  }
  setLoading(loading: boolean) {
    console.log('this.setLoading');
    return this.loadingSource.next(loading);
  }
}
