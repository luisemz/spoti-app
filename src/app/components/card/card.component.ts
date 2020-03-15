import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html"
})
export class CardComponent implements OnInit {
  @Input() items: any;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  showArtist = artist => {
    if (artist.type === "artist") this.router.navigate(["/artist", artist.id]);
    else return;
  };
}
