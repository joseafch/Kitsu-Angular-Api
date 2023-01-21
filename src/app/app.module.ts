import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { AnimesService } from './shered/servives/animes.service';
import { HeaderComponent } from './shared/components/header/header.component';
import { AnimePageComponent } from './pages/anime-page/anime-page.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http'; //hay que importarlo a mano ya q casi nunca lo hace solo
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AnimePageComponent,
    HeaderComponent,
    GalleryComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // esto es lo que te permitara hacer importaciones
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
