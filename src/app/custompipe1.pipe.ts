import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  template: "<p>The hero's birthday is {{ event | date }}</p>"
})
export class HeroBirthdayComponent {
  birthday = new Date(1988, 3, 15); // April 15, 1988 -- since month parameter is zero-based
}