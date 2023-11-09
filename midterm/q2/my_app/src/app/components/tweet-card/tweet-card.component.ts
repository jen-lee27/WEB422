import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.css']
})
export class TweetCardComponent {
  @Input() data: string = "";
  @Input() date: string = "";
  @Input() counter: number = 0;
  @Input() likeImg: string = "../../../assets/images/like.png";
  @Input() dislikeImg: string = "../../../assets/images/dislike.png";

  increment(e:Event) {
    e.preventDefault();
    this.counter = this.counter + 1;
    this.likeImg = "../../../assets/images/like_filled.png";
  }
  decrement(e:Event) {
    e.preventDefault();
    if(this.counter > 0) {
      this.counter = this.counter - 1;
      this.dislikeImg = "../../../assets/images/dislike_filled.png";
      if (this.counter === 0) {
        this.likeImg = "../../../assets/images/like.png";
        this.dislikeImg = "../../../assets/images/dislike.png";
      }
    }
  }
}
