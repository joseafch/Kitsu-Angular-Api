import { AnimesService } from './../../shered/servives/animes.service';
import { Component, OnInit } from '@angular/core';
import { SliderModule } from 'primeng/slider';

@Component({
  selector: 'app-anime-page',
  templateUrl: './anime-page.component.html',
  styleUrls: ['./anime-page.component.scss'],
})
export class AnimePageComponent implements OnInit, SliderModule {
  allAnimes: any[] = [];
  animesList: any;
  animeAge: Number[]=[1910,2023];
  animepuntuaje: Number[]=[0,100];
  animecapitulos: Number[]=[1,2000];
  animeName: any;
  avancedMenu= false
  moreOption(){
    this.avancedMenu = true
  }
  closeOption(){
    this.avancedMenu = false
  }
  constructor(private animesService: AnimesService) {}
  ngOnInit() {
    this.animesService.getAllAnimes(this.animesList).subscribe((res: any) => {
      this.allAnimes = res.data;
      this.animesList = res.data;
      console.log('allAnimes', res.data);
    });
  }

  filtrarName(nombre: string) {
    this.animesService.getAllAnimes(nombre).subscribe((res: any) => {
      this.allAnimes = res.data;
      this.animesList = res.data;
      console.log('allAnimes', res.data);
    });
  }

  filtrarAge(age: Number [] ) {
    console.log(age);

    this.animesService.getAgeAnimes(age).subscribe((res: any) => {
      this.allAnimes = res.data;
      this.animesList = res.data;
      console.log('AnimesAges', res.data);
    });
  }

  botonValue() {}
}
// let filtroAnime=this.allAnimes.filter((animes:any)=> animes.attributes.canonicalTitle)
// this.animesList=filtroAnime
