import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'we-love-food';

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    console.log(environment.domain);

    this._http.get(environment.domain + 'hello').subscribe((res: any) => {
      this.title = res.answer;
      console.log(res);
    });
  }
}
