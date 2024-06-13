import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { project } from '../../admin-auth';
import 'bootstrap/dist/js/bootstrap.bundle';

@Component({
  selector: 'app-a-navbar',
  templateUrl: './a-navbar.component.html',
  styleUrl: './a-navbar.component.css'
})
export class ANavbarComponent {

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
