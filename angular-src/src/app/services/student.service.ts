import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { AuthService} from './auth.service';
import { map } from 'rxjs/operators';

@Injectable()
export class StudentService {

  constructor(private http:Http, private authService: AuthService) { }

  getTotalNumberOfRegisteredStudents() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.authService.loadTokenUser(headers);
    return this.http.get('student/numberOfStudents', {headers: headers}).pipe(map(res => res.json()));
  }

  getTotalNumberOfRegisteredStudentsPerCourse() {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.authService.loadTokenUser(headers);
      return this.http.get('student/numberOfStudentsPerCourse', {headers: headers}).pipe(map(res => res.json()));
  }

  saveResume(student) {
    let headers = new Headers();
    this.authService.loadTokenUser(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('student/saveResume', {"user": student}, {headers: headers}).pipe(map(res => res.json()));
  }

  //TODO add auth headers, in case the signup is via fenix
  signup(info) {
    let headers = new Headers();
      this.authService.loadTokenUser(headers);
      headers.append('Content-Type', 'application/json');
    return this.http.post('gce/signupHashCode', {"signup":info}, {headers: headers}).pipe(map(res => res.json()));
  }

  getResume() {
    let headers = new Headers();
    this.authService.loadTokenUser(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/student/resume', {headers: headers}).pipe(map(res => res.json()));
  }

  applyToProposal(application) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    this.authService.loadTokenUser(headers);
    return this.http.post('student/apply', application, {headers: headers}).pipe(map(res => res.json()));
  }

  getStudentApplications() {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    this.authService.loadTokenUser(headers);
    return this.http.get('student/myApplications', {headers: headers}).pipe(map(res => res.json()));

  }

    invalidateApplication(id) {
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        this.authService.loadTokenUser(headers);
        return this.http.put('student/applications/invalidate', id, {headers: headers}).pipe(map(res => res.json()));
    }

    loadStudentProfile()    {
        return this.authService.loadUserProfile();
    }

    getRecommendedTheses() {
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        this.authService.loadTokenUser(headers);
        return this.http.get('student/getRecommendedTheses', {headers: headers}).pipe(map(res => res.json()));

    }
}
