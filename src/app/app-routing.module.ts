import { AnimePageComponent } from './pages/anime-page/anime-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "animes", component: AnimePageComponent  },// 1ºphath: es para la ruta "nomre de la ruta" 2º component  pa que cuando el usuario acceda al componente accesa al componenete ContactPageComponent en este caso
  {path: "", component: HomePageComponent  },// 1ºphath: es para la ruta "nomre de la ruta" 2º component  pa que cuando el usuario acceda al componente accesa al componenete ContactPageComponent en este caso
];
//hay que borrar la primera letra de ContactPageComponent y ponerla otra vez para que te la recopiende y te la enture sola
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
