import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Assets issue</h2>
      <pre>Running ng serve and ng build renders different image below.</pre>
      <img src="../assets/face.png" alt="face"/>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assets-replicate';
}
