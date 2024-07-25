import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from "./pages/about-us/about-us.component";
import { PortfolioComponent } from "./pages/portfolio/portfolio.component";

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Mpho Motlhale' },
  { path: 'about', component: AboutUsComponent, title: 'Mpho Motlhale | About Us' },
  { path: 'portfolio', component: PortfolioComponent, title: 'Mpho Motlhale | Portfolio' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
