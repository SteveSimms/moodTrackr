import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-select-mood',
  template: `
    <!--moodSelctComponent-->
    <div class="flex flex-col items-center mt-20">
      <div class="w-full md:w-1/2 flex flex-col items-center h-64">
        <div class="w-full px-4">
          <div *ngFor="let emotion of emotions" class="flex flex-col items-center relative">
            <div class="w-full">
              <div class="my-2 p-1 bg-white flex border border-gray-200 rounded">
                <div class="flex flex-auto flex-wrap"></div>
                <input placeholder="Search by position" class="p-1 px-2 appearance-none outline-none w-full text-gray-800">
                <div class="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200">
                  <button class="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up w-4 h-4">
                      <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div   class="absolute shadow bg-white top-100 z-40 w-full lef-0 rounded max-h-select overflow-y-auto svelte-5uyqqj">
              <div class="flex flex-col w-full">
                <div class="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100">
                  <div class="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                    <div class="w-6 flex flex-col items-center">
                      <div class="flex relative w-5 h-5 bg-orange-500 justify-center items-center m-1 mr-2 w-4 h-4 mt-1 rounded-full " (click)="onAddToCurrentMood(emotion)" >{{emotion.emoji}}</div>
                    </div>
                    <div class="w-full items-center flex">
                      <div class="mx-2 -mt-1  ">{{emotion.state}}
                        <div class="text-xs truncate w-full normal-case font-normal -mt-1 text-gray-500">{{emotion.mood}}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <!--CurrentMoodCardComponent-->
      <div class="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 mt-20"
           *ngFor="let c of currentMood">
        <div class="flex items-center justify-between">
          <span class="text-sm font-light text-gray-600 dark:text-gray-400">{{c?.dateTime}}</span>
          <a class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">Mood</a>
        </div>
        <div class="container">
          <div class="mt-20">
            <a href="#" class="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">   {{c.state}}</a>
            <p class="mt-2 text-gray-600 dark:text-gray-300">{{c?.mood}}</p>
          </div>
          <div class="flex items-center justify-between mt-4">
            <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">Read more</a>

            <div class="flex items-center">
              <img class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80" alt="avatar">
              <a class="font-bold text-gray-700 cursor-pointer dark:text-gray-200">Steve Simms</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [

    `
      .top-100 {top: 100%}
      .bottom-100 {bottom: 100%}
      .max-h-select {
        max-height: 300px;
      }

    `
  ]
})
export class SelectMoodComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dateAndTime = new Date();
  formatDate(){
    return  this.dateAndTime.toLocaleString('en-US',{
      weekday: 'short',
      month: 'long',
      day: '2-digit',
      year: 'numeric'
    });
  }
  emotionsControl = new FormControl('', [Validators.required]);
  emotions = [
    {mood: 'Normal', state: 'Euthymic',emoji: '😃',dateTime: this.formatDate()},
    {mood: 'Feeling great, as if one just won the lottery.', state: 'Euphoric',emoji: '😃',dateTime:  this.formatDate()},
    {mood: 'Sad, loss of intrest in things that normally hold your interest. A sense of listlessness', state: 'Depressed',emoji: '😔',dateTime:  this.formatDate()},
    {mood: 'Euphoric... Euphoria racing thoughts flight of ideas are all common symptoms of mania.', state: 'Manic',emoji: '🤪',dateTime: this.formatDate()},
  ];

  currentMood: any  = [];

  onAddToCurrentMood(mood: any){
    this.currentMood.push(mood)
    console.log(this.currentMood)
  }

}
