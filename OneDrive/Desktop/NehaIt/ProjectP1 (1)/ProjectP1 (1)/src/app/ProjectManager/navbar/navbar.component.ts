import { Component } from '@angular/core';

@Component({
  selector: 'app-Pmnavbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class PmNavbarComponent {

  mobileNav: HTMLElement | null = document.querySelector(".hamburger");
  navbar: HTMLElement | null = document.querySelector(".menubar");

toggleNav = (): void => {
  if (this.navbar && this.mobileNav) {
    this.navbar.classList.toggle("active");
    this.mobileNav.classList.toggle("hamburger-active");
  }
  if (this.mobileNav) {
    this.mobileNav.addEventListener("click", () => this.toggleNav());
  }
};
}
