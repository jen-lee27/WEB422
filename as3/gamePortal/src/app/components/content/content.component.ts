import { Component, Input } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/game';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  games: Game[] = [];
  allGames: Game[] = [];
  @Input() genre: string = "";

  constructor(private gameService: GameService) { }

  ngOnInit() {
    if(this.genre === "card") {
      this.gameService.getCardGames().subscribe((data: Game[]) => {
        this.games = this.allGames = data;
      })
      // this.games = this.gameService.getCardGames();
    } else if (this.genre === "shooter") {
      this.gameService.getShooterGames().subscribe((data: Game[]) => {
        this.games = this.allGames = data;
      })
      // this.games = this.gameService.getShooterGames();
    } else if (this.genre === "strategy") {
      this.gameService.getStrategyGames().subscribe((data: Game[]) => {
        this.games = this.allGames = data;
      })
      // this.games = this.gameService.getStrategyGames();
    } else {
      this.gameService.getGames().subscribe((data: Game[]) => {
        this.games = this.allGames = data;
        this.gameService.storeInLocal(data);
      })
      // this.games = this.gameService.getAllGames();
    }
  }

  searchFor(value: string) {
    console.log("searched: " + value);
    this.games = this.allGames.filter((game) => game.title.toLowerCase().includes(value.toLowerCase()));
  }
  
}
