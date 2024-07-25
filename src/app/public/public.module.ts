import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from "./components/hero/hero.component";
import { AboutUsComponent } from "./pages/about-us/about-us.component";
import { PortfolioComponent } from "./pages/portfolio/portfolio.component";
import { FeaturedProjectsComponent } from './components/featured-projects/featured-projects.component';
import { ProjectsCardsComponent } from './components/projects-cards/projects-cards.component';
import { ServicesComponent } from './components/services/services.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';

import { TechStackComponent } from './components/tech-stack/tech-stack.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    PortfolioComponent,
    HeroComponent,
    FeaturedProjectsComponent,
    ProjectsCardsComponent,

    ServicesComponent,
    ProfileCardComponent,
    TechStackComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
  ],
})
export class PublicModule { }
