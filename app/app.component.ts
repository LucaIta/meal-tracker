import { Component } from 'angular2/core';

@Component({ //component decorator defining selector and template
  selector: 'my-app',
  template: `
   <div class="container">
     <h1>Meal Tracker</h1>
   </div>
  `
})

export class AppComponent {

}
