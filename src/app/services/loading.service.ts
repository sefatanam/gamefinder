import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isLoading = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  setLoading(): void {
    this.isLoading.next(true);
  }

  offLoading(): void {
    // => It's a hack 😅
    setTimeout(() => {
      this.isLoading.next(false);
    }, 4000)

  }
}
