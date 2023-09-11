import { Component, OnInit } from "@angular/core";
import { dataCollection } from "../../data/DataFake";
import { BlogNews } from "../../domain/BlogNews";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  newsList: BlogNews[] = [];
  mainNews: BlogNews = new BlogNews();
  id: String | null = "0";

  ngOnInit(): void {
    dataCollection[0].priority = true;
    this.mainNews = dataCollection[0];
    this.newsList = dataCollection.filter((item) => item.priority == false);
  }
}
