import {Component, Output} from '@angular/core';

import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
<!--//Todo: Implements dark mode-->
<!--    dark mode toggler-->
    <div
      class="flex items-center justify-center mx-auto absolute top-5 right-0 left-1/3 "
    >
      <span class="text-xs font-extralight">Light </span>
      <div>
        <input type="checkbox" name="" id="checkbox " class="hidden" />
        <label for="checkbox" class="cursor-pointer ">
          <div class="w-9 h-5 flex items-center bg-gray-300 rounded-full p2 switch-ball" (click)="toggleDarkTheme()">
            <div class="w-4 h-4 bg-white rounded-full shadow  "></div>
          </div>
        </label>
      </div>

      <span class="text-xs font-semibold">Dark</span>



    </div>

<app-select-mood [darkModeStatus]="isDarkMode"></app-select-mood>




`,
  styles:[

`
  #checkbox:checked + label .switch-ball{
    background-color: white;
    transform: translateX(24px);
    transition: transform 0.3s linear;
  }
`
  ]
})
export class AppComponent {
  title = 'moodTrackr';
   checkbox = document.querySelector("#checkbox");
   html = document.querySelector("html");

  @Output() isDarkMode: any = false;

  toggleDarkTheme() : void {
    document.body.classList.toggle('dark-mode');
    this.isDarkMode = true;
  }

}

