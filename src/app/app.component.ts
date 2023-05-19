import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './shared/ui/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, HttpClientModule, NavbarComponent],
  standalone: true,
})
export class AppComponent implements OnInit {
  title = 'we-love-food';

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    // console.log(environment.domain);
    // this._http.get(environment.domain + 'hello').subscribe((res: any) => {
    //   this.title = res.answer;
    //   console.log(res);
    // });
  }
}
