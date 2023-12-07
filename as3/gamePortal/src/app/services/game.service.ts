import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, map } from 'rxjs';
import { Game } from '../interfaces/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  gameList: Game[] = [];

  constructor(private http: HttpClient) { }

  getGames(): Observable<Game[]> {
    if (this.gameList.length > 0) {
      return new Observable((observer) => {
        observer.next(this.gameList);
        observer.complete();
      });
    }

    console.log("api call");
    let headers = new HttpHeaders()
      .set(
        'x-rapidapi-key',
        'e13da2cc73msh811a7ddecfe8c11p1c3c8fjsn9c44933aa8c1'
      )
      .set('x-rapidapi-host', 'free-to-play-games-database.p.rapidapi.com');
    return this.http.get<Game[]>(
      'https://free-to-play-games-database.p.rapidapi.com/api/games',
      { headers }
    );
  }

  storeInLocal(arr: Game[]): void {
    this.gameList = arr;
  }

  getShooterGames(): Observable<Game[]> {
    // return this.gameList.filter((game) => game.genre.toLowerCase().includes("shooter"));
    return this.getGames().pipe(map(data => {
      return data.filter((game) => game.genre.toLowerCase().includes("shooter"));
    }));
  }
  getCardGames(): Observable<Game[]> {
    // return this.gameList.filter((game) => game.genre.toLowerCase().includes("card"));
    return this.getGames().pipe(map(data => {
      return data.filter((game) => game.genre.toLowerCase().includes("card"));
    }));
  }
  getStrategyGames(): Observable<Game[]> {
    // return this.gameList.filter((game) => game.genre.toLowerCase().includes("strategy"));
    return this.getGames().pipe(map(data => {
      return data.filter((game) => game.genre.toLowerCase().includes("strategy"));
    }));
  }
}
