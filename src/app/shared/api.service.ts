import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable, of, Subject } from "rxjs";
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class ApiService {

    isLoggedIn = new BehaviorSubject<boolean>(false);
    loggedInUserName = new BehaviorSubject<string>('');
    isAutisticUser = new BehaviorSubject<boolean>(false);
    // userPreferences = new Subject();
    userPreferences = "";

    httpOptions = {
        headers: new HttpHeaders({ 'Content-type': 'application/json' })
    }

    constructor(private http: HttpClient) { }

    setAutismIndicator(message: boolean) {
        this.isAutisticUser.next(message);
    }

    getAutismIndicator(): Observable<boolean> {
        return this.isAutisticUser.asObservable();
    }

    setLoggedInUserName(message: string) {
        this.loggedInUserName.next(message);
    }

    getLoggedInUserName(): Observable<string> {
        return this.loggedInUserName.asObservable();
    }

    setPreferences(preferences: any) {
        this.userPreferences = preferences;
        // this.userPreferences.next(preferences);
    }

    // getPreferences(): Observable<any>  {
    //     return this.userPreferences.asObservable();
    // }

    getPreferences()  {
        return this.userPreferences;
    }

    validateLoginDetails(loginDetails): Observable<any> {
        return this.http.post<any>('', loginDetails, this.httpOptions)
            .pipe(catchError(this.handleError<any>('Validate Login Details')));
    }

    savePreferences(preferences: any): Observable<any> {
        return this.http.post<any>('', preferences, this.httpOptions)
            .pipe(catchError(this.handleError<any>('Validate Login Details')));
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            console.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        }
    }
}
