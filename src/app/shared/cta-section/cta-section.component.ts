import {Component, OnInit} from '@angular/core';
import {NewslettersComponent} from "../newsletters/newsletters.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [
    NewslettersComponent,
    NgIf
  ],
  templateUrl: './cta-section.component.html',
  styleUrl: './cta-section.component.scss'
})
export class CtaSectionComponent implements OnInit {
  isVisible = false;
  isFirstVisit = false;

  ngOnInit() {
    const hasSeenPopup = localStorage.getItem('hasSeenNewsletterPopup');

    if (!hasSeenPopup) {
      this.isVisible = true;
      this.isFirstVisit = true;
      localStorage.setItem('hasSeenNewsletterPopup', 'true');
    }
  }

  close(event?: MouseEvent) {  // <-- Rendre l'argument optionnel
    // On ne permet la fermeture que si ce n'est pas la première visite
    // OU si c'est la première visite mais qu'on a cliqué sur le bouton close
    if (!this.isFirstVisit || (this.isFirstVisit && event)) {
      this.isVisible = false;
    }
  }

  handleOverlayClick(event: MouseEvent) {
    // On vérifie si le clic est sur l'overlay (pas sur le contenu du popup)
    const target = event.target as HTMLElement;
    if (target.classList.contains('newsletter-overlay')) {
      this.close();
    }
  }

  open() {
    this.isVisible = true;
    this.isFirstVisit = false; // Quand on rouvre manuellement, ce n'est plus la première visite
  }
}
