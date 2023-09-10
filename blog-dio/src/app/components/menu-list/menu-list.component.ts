import { Component } from "@angular/core";

@Component({
  selector: "app-menu-list",
  templateUrl: "./menu-list.component.html",
  styleUrls: ["./menu-list.component.css"],
})
export class MenuListComponent {
  isOpenMenu: Boolean = false;

  toggleMenu(): void {
    this.isOpenMenu = !this.isOpenMenu;
  }
}
