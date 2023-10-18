import { Component, OnInit } from "@angular/core";
import { slideInAnimation, slideInAnimation2 } from "./slideInAnimation.component";


@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    slideInAnimation,
    slideInAnimation2
  ]
})
export class AnimationComponent {

  isToggle = false;

  toggleDiv() {
    this.isToggle = !this.isToggle;
  }

}
