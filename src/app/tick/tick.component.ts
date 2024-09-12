import { Component } from '@angular/core';

@Component({
  selector: 'app-tick',
  templateUrl: './tick.component.html',
  styleUrl: './tick.component.css'
})
export class TickComponent {
  closePopup(){
    window.location.replace("home")
}
}
