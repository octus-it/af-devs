import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

  faqItems = [
    {
      question: "Qu’est-ce que Africa Devs Community ?",
      answer: "Africa Devs Community est une communauté de développeurs africains dédiée au partage de connaissances, à l’entraide et à l’innovation technologique. Nous organisons des événements, des formations et des projets collaboratifs pour renforcer les compétences et créer des opportunités."
    },
    {
      question: "Qui peut rejoindre la communauté ?",
      answer: "Tout développeur, débutant ou expérimenté, passionné par le code et l’univers du numérique peut rejoindre la communauté. Les designers, chefs de projet et autres acteurs du digital sont également les bienvenus."
    },
    {
      question: "Comment rejoindre Africa Devs Community ?",
      answer: "Il suffit de s’inscrire via notre site web et de rejoindre nos plateformes d’échange (Discord, Slack, ou réseaux sociaux). Vous aurez accès à nos événements, formations et opportunités de collaboration."
    },
    {
      question: "Quels types d’événements organisez-vous ?",
      answer: "Nous proposons des meetups, hackathons, conférences, formations et sessions de mentorat. Chaque événement est conçu pour favoriser l’apprentissage, le networking et l’innovation."
    },
    {
      question: "Y a-t-il des frais d’adhésion ?",
      answer: "L’adhésion à la communauté est gratuite. Toutefois, certaines formations et événements spécifiques peuvent nécessiter une participation financière pour couvrir les coûts logistiques."
    },
    {
      question: "Comment puis-je contribuer à la communauté ?",
      answer: "Vous pouvez contribuer en partageant vos connaissances, en mentorant d’autres membres, en participant à nos événements ou en rejoignant nos projets open source."
    },
    {
      question: "Où puis-je suivre les actualités de la communauté ?",
      answer: "Toutes nos actualités sont partagées sur notre site web, nos réseaux sociaux et nos plateformes de discussion. Inscrivez-vous à notre newsletter pour ne rien manquer !"
    },
    {
      question: "Puis-je proposer un projet ou une idée à la communauté ?",
      answer: "Oui, nous encourageons l’initiative ! Vous pouvez proposer un projet ou une idée via notre formulaire de contact, et nous vous aiderons à le concrétiser avec le soutien de la communauté."
    },

  ];

}
