import { Component, OnInit } from "@angular/core";
import { SharedLeagues, SharedService } from "./shared";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [SharedService, SharedLeagues],
})
export class AppComponent implements OnInit {
  constructor(
    public sharedService: SharedService,
    public sharedLeagues: SharedLeagues
  ) {}
  title = "my-app";
  ngOnInit() {
    // Initialization tasks
    console.log(this.isCreate);
  }
  isCreate: boolean = false;
  leagues: any = [
    { name: "NFL", checked: false },
    { name: "NHL", checked: false },
    { name: "MLB", checked: false },
    { name: "NCAA", checked: false },
    { name: "MLS", checked: false },
  ];

  onValueChanged(newValue: boolean) {
    this.isCreate = newValue;
  }
  onLeaguesChange(item: any) {
    const newLeagues =[...this.leagues.filter(((league:any)=>league.name!==item.name)), {...item, checked:!item.checked}] 
    this.leagues = newLeagues
    console.log(this.leagues.filter(((league:any)=>league.name!==item.name)))
    console.log(this.leagues)
  }

  checkedLeagues(league: any) {
    return league.filter((item: any) => item.checked === true);
  }
}
