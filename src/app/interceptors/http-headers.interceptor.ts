import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        'x-rapidapi-key': 'e7bb58ca01msheb3345efe20700fp1338fcjsnf0dffa028a82',
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
      },
      setParams:{
        key :'563eeaf7c0884b98a51b48e12683545f'
      }
    })
    return next.handle(request);
  }
}
