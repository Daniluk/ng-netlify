import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import IUser from './interfaces/IUser';
import { CONFIG } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) {

  }

  getItemFromPortblog(item: IUser): Observable<any> {
    const url = `${CONFIG.PORTAL.API_URL}${CONFIG.PORTAL.TYPE.USER_AUTH}username=${item.email}&password=${item.password}`;
    // console.log(url);
    return this.http.get(url)
      .pipe(map(response => response))
      ;

  }
}
