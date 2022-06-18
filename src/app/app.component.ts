import { Component } from '@angular/core';

import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  template: `

<!--    dark mode toggler-->
    <div
      class="flex items-center justify-center mx-auto absolute top-5 right-0 left-1/3 "
    >
      <span class="text-xs font-extralight">Light </span>
      <span class="text-xs font-semibold">Dark</span>



    </div>

<app-select-mood></app-select-mood>




`,
  styles:[

`
  .top-100 {top: 100%}
  .bottom-100 {bottom: 100%}
  .max-h-select {
    max-height: 300px;
  }
`
  ]
})
export class AppComponent {
  title = 'moodTrackr';

}

