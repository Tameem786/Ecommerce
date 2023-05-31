import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  private feature = new BehaviorSubject<string>('home');

  constructor() {
    this.feature.next('home');
  }

  setValue(value: string) {
    this.feature.next(value);
  }

  getValue(): BehaviorSubject<string> {
    return this.feature;
  }
}
