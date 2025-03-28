import {AfterViewInit, Component, HostListener, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MobileNotSupportedComponent} from "./mobile-not-supported/mobile-not-supported.component";
import {isPlatformBrowser, NgIf} from "@angular/common";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MobileNotSupportedComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Africa Devs Community';

  isMobile = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkIfMobile();
      // Écouteur d'événement seulement côté client
      window.addEventListener('resize', () => this.checkIfMobile());
    }
  }

  private checkIfMobile() {
    // Vérifie si window est disponible (côté client)
    if (typeof window !== 'undefined') {
      this.isMobile = window.innerWidth < 768;
    }
  }
}
