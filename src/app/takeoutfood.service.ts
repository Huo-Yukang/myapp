import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {
  Response,
  Administrator, Food, Shopping, Business
} from './entity';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class TakeoutfoodService {
  response: Response;
  private userUrl = '../login';
  private logoutUrl = '../logout';
  private foodUrl = '../food.ctl';

  constructor(private http: HttpClient) { }

  // 验证登录用户账号密码是否正确
  checkUser(user: { username: string, password: string }): Observable<any> {
    return this.http.post<any>(this.userUrl, user);
  }
  logOut(): Observable<any> {
    return this.http.get<any>(this.logoutUrl);
  }
  getFoods(): Observable<Food[]> {
    return this.http.get<Food[]>(this.foodUrl )
      .pipe(
        catchError(this.handleError<Food[]>('getFoods', []))
      );
  }
  getFood(id: number): Observable<Food> {
    const url = this.foodUrl + '?id=' + id;
    return this.http.get<Food>(url).pipe(
      catchError(this.handleError<Food>(`getFood id=${id}`))
    );
  }
  updateFood(food: Food): Observable<Response> {
    return this.http.put<Response>(this.foodUrl, food, httpOptions).pipe(
      catchError(this.handleError<Response>('updateFood'))
    );
  }
  /**
   * Handle Http operation that failed.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

