import { Component } from 'ngx-onsenui';
import * as ons from 'onsenui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Aepyornis';
  constructor() {
  }

  onClick(){
    ons.notification.alert('Clicked!');
  }
}
