import { AnimesService } from './../../shered/servives/animes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent  implements OnInit{// al tener el componente oninit hay que tener una  funcion llamada ng OnInit()
 constructor( private animesService: AnimesService){}
  animes:any // sacamos el valor de la api
animesPopulate:any
animesAwaited: any
animesPoints: any
mostPopular: any
 ngOnInit() {//se ejecutara cuando se llame al html
   this.animesService.getAnimes().subscribe((res: any)=>{ // el subscribe se usa pa llamar a la promesa para obtener los datos como un .then
    this.animes= res.data // data es donde esta almacenado los archivos de la api *hay q investigar y leer la api para saber como sacar los datos necesarios
    console.log('semana',res.data)})
  
  this.animesService.getAnimesPopulate().subscribe((res: any)=>{ 
      this.animesPopulate = res.data 
      console.log('pupulate',res.data)})

  this.animesService.getAnimesAwaited().subscribe((res: any)=>{ 
        this.animesAwaited = res.data 
        console.log('pupulate',res.data)})
        
  this.animesService.getAnimesPoints().subscribe((res: any)=>{ 
          this.animesPoints = res.data 
          console.log('pupulate',res.data)})

  this.animesService.getAnimesMostPopular().subscribe((res: any)=>{ 
            this.mostPopular = res.data 
            console.log('pupulate',res.data)})
  }
};
// this.animesService.getAnimesPopulate().subscribe((res: any)=>{ // el subscribe se usa pa llamar a la promesa para obtener los datos como un .then
//   console.log(res);
//   this.animesPopulate= res.data // data es donde esta almacenado los archivos de la api *hay q investigar y leer la api para saber como sacar los datos necesarios
//   console.log(res.data);