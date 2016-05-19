import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: (
    `
      <form class='ui large form segment'>
        <h3 class='ui header'> Add Link </h3>

        <div class='field'>
          <label for='title'>Title:</label>
          <input name='title' />
        </div>
        <div class='field'>
          <label for='link'>Link:</label>
          <input name='link' />
        </div>

      </form>
    `
  )
})

export class AppComponent {
  constructor() {}
}
