import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {PublicModule} from "./public/public.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    PublicModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
