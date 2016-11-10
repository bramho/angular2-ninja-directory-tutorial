import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works! woop woop.';
  name = 'Bram';

  ninja = {
     name: "Bram",
     belt: "Red"
  };

  yell(e) {
     alert("I am yelling!");
 }
}
