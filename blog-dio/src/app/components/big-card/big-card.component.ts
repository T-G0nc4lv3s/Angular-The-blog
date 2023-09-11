import { Component, Input } from "@angular/core";

@Component({
  selector: "app-big-card",
  templateUrl: "./big-card.component.html",
  styleUrls: ["./big-card.component.css"],
})
export class BigCardComponent {
  @Input()
  imgUrl: String = "";

  @Input()
  cardTitle: String = "";

  @Input()
  description: String = "";

  @Input()
  id: String = "0";
}
