import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Vaccination COVID';

  ngOnInit(): void {
    this.bucket()
  }

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {}

  bucket() {
    this.http.get<any>('api/infos/429', {observe: 'response'}).subscribe({
    error:  (err) => {
      console.log(err.status);
      this.router.navigate(['/infos/429']);
    }
  });
  }
}
