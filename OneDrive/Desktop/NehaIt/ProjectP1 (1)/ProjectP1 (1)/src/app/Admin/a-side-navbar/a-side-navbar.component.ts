import { Component } from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-a-side-navbar',
  templateUrl: './a-side-navbar.component.html',
  styleUrl: './a-side-navbar.component.css'
})
export class ASideNavbarComponent {
  icon = faBars;
}
