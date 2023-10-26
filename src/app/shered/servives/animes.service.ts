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
  getAllAnimes(filter:any){
    return this.http.get(`https://kitsu.io/api/edge/anime?fields%5Banime%5D=slug%2CcanonicalTitle%2Ctitles%2CposterImage%2Cdescription%2CaverageRating%2CstartDate%2CpopularityRank%2CratingRank%2CyoutubeVideoId${filter?'&filter%5Btext%5D='+filter: ''}&page%5Blimit%5D=20&page%5Boffset%5D=0`) 
  }
  getAgeAnimes(filterAge:any){
    // console.log(`https://kitsu.io/api/edge/anime?fields%5Banime%5D=slug%2CcanonicalTitle%2Ctitles%2CposterImage%2Cdescription%2CaverageRating%2CstartDate%2CpopularityRank%2CratingRank%2CyoutubeVideoId${filterAge ?'&filter%5Byear%5D='+filterAge[0]+'..'+filterAge[1]: '1907..2008'}&page%5Blimit%5D=20&page%5Boffset%5D=20&sort=-user_count`);
    
    return this.http.get(`https://kitsu.io/api/edge/anime?fields%5Banime%5D=slug%2CcanonicalTitle%2Ctitles%2CposterImage%2Cdescription%2CaverageRating%2CstartDate%2CpopularityRank%2CratingRank%2CyoutubeVideoId${filterAge ?'&filter%5Byear%5D='+filterAge[0]+'..'+filterAge[1]: '1907..2008'}&page%5Blimit%5D=20&page%5Boffset%5D=20&sort=-user_count`) 
  }
}
