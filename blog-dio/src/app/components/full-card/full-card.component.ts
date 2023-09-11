import { Component, Input } from "@angular/core";

@Component({
  selector: "app-full-card",
  templateUrl: "./full-card.component.html",
  styleUrls: ["./full-card.component.css"],
})
export class FullCardComponent {
  @Input()
  id: String = "";
  @Input()
  imgUrl: String = "";
  @Input()
  cardTitle: String = "";
  @Input()
  description: String = "";
}
