import { Component } from '@angular/core';
import {HerosComponent} from "../shared/heros/heros.component";
import {HeaderComponent} from "../shared/header/header.component";
import {FeaturesSectionComponent} from "../shared/features-section/features-section.component";
import {AboutComponent} from "../shared/about/about.component";
import {CtaSectionComponent} from "../shared/cta-section/cta-section.component";
import {PricingSectionComponent} from "../shared/pricing-section/pricing-section.component";
import {TestimonialsComponent} from "../shared/testimonials/testimonials.component";
import {FaqComponent} from "../shared/faq/faq.component";
import {TeamsComponent} from "../shared/teams/teams.component";
import {BlogsComponent} from "../shared/blogs/blogs.component";
import {ContactComponent} from "../shared/contact/contact.component";
import {JobsOfferComponent} from "../shared/jobs-offer/jobs-offer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HerosComponent,
    HeaderComponent,
    FeaturesSectionComponent,
    AboutComponent,
    CtaSectionComponent,
    PricingSectionComponent,
    TestimonialsComponent,
    FaqComponent,
    TeamsComponent,
    BlogsComponent,
    ContactComponent,
    JobsOfferComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
