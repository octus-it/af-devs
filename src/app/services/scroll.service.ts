// src/app/services/script-loader.service.ts
import { Injectable } from '@angular/core';

declare const WOW: any;
declare const Swiper: any;

@Injectable({
  providedIn: 'root'
})
export class ScriptLoaderService {
  initWowJs() {
    new WOW().init();
  }

  initSwiper() {
    if (typeof Swiper !== 'undefined') {
      new Swiper(".testimonial-carousel", {
        // Configuration Swiper identique à votre version
      });
    }
  }

  initMenuScroll() {
    // Votre code de scroll existant
  }
}
