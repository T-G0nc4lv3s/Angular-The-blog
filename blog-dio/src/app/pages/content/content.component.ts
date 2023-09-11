import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { dataCollection } from "../../data/DataFake";
import { BlogNews } from "../../domain/BlogNews";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"],
})
export class ContentComponent implements OnInit {
  id: String | null = "0";
  title: String = "";
  imgUrl: String = "";
  description: String | null = "";

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.id = value.get("id");
    });

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: String | null) {
    const result = dataCollection.filter((item) => item.id == id)[0];
    this.title = result.title;
    this.imgUrl = result.imgUrl;
    this.description = result.description;
  }
}
