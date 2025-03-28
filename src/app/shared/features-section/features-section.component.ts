import { Component } from '@angular/core';
import {NgForOf, NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-features-section',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './features-section.component.html',
  styleUrl: './features-section.component.scss'
})
export class FeaturesSectionComponent {

  items = [
    {
      title: "Formations",
      description: "Ateliers et sessions pour monter en compétence sur les technologies émergentes.",
      delay: ".1s",
      icon: "icon1",
    },
    {
      title: "Meetups",
      description: "Rencontres entre développeurs pour échanger sur les tendances et bonnes pratiques.",
      delay: ".15s",
      icon: "icon2",
    },
    {
      title: "Hackathons",
      description: "Des compétitions entre développeurs de codage pour innover et relever des défis en équipe.",
      delay: ".2s",
      icon: "icon3",
    },
    {
      title: "Mentorat",
      description: "Accompagnement des nouveaux développeurs par des experts expérimentés.",
      delay: ".25s",
      icon: "icon4",
    },
    {
      title: "Conférences",
      description: "Des interventions d’experts sur des sujets technologiques de toutes sortes et inspirants.",
      delay: ".3s",
      icon: "icon5",
    },
    {
      title: "Projets collaboratifs",
      description: "Développement d’applications, de packages et pleins d'autres en open source.",
      delay: ".35s",
      icon: "icon6",
    },
    {
      title: "Veille technologique",
      description: "Partage d’articles, de ressources et d’analyses sur l’évolution du numérique.",
      delay: ".4s",
      icon: "icon7",
    },
    {
      title: "Networking",
      description: "Création d’opportunités professionnelles et renforcement du réseau des membres.",
      delay: ".45s",
      icon: "icon8",
    }
  ];



}
