import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { AuthService} from './auth.service';
import { map } from 'rxjs/operators';

@Injectable()
export class ThesisService {

    constructor(private http:Http, private authService: AuthService) { }

    getAllTheses() {
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        this.authService.loadTokenUser(headers);
        return this.http.get('thesis/getTheses', {headers: headers}).pipe(map(res => res.json()));

    }



}
