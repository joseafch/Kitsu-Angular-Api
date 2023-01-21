import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// los servicios son utilizables en cualquier parter del proyecto
@Injectable({
  providedIn: 'root'
})
export class AnimesService {

  constructor(private http: HttpClient) {}//hay que ponerlo en el constructor para llmar a la api
  
  getAnimes(){
return this.http.get('https://kitsu.io/api/edge/trending/anime?limit=6') //asi se hace un peticion a una API
  }
 getAnimesPopulate(){
    return this.http.get('https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&page%5Blimit%5D=6&sort=-user_count') //asi se hace un peticion a una API
      }
  getAnimesAwaited(){
        return this.http.get('https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=upcoming&page%5Blimit%5D=6&sort=-user_count') //asi se hace un peticion a una API
          }
getAnimesPoints(){
     return this.http.get('https://kitsu.io/api/edge/anime?page%5Blimit%5D=6&sort=-average_rating') 
   }
   getAnimesMostPopular(){
    return this.http.get('https://kitsu.io/api/edge/anime?page%5Blimit%5D=6&sort=-user_count') 
  }
}
