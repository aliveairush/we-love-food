import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'we-love-food';

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this._http
      .get('https://we-love-food-back.onrender.com/hello')
      .subscribe((res: any) => {
        this.title = res.answer;
        console.log(res);
      });
  }
}
