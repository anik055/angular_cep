import { Component, EventEmitter, Input, Output } from "@angular/core";
import { OnInit } from "@angular/core";
import { SharedLeagues, SharedService } from "../shared";
import { AlertService } from "../common/alert/alert";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["../app.component.css"],
})
export class LandingComponent implements OnInit {
  ngOnInit() {
    // Initialization tasks
    console.log(this.leagues);
  }
  isCreate: boolean = false;
  @Output() valueChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() leagueChanged: EventEmitter<any> = new EventEmitter<any>();

  changeValue() {
    const newValue = true;
    this.valueChanged.emit(newValue);
    console.log(newValue)
  }

  changeLeague(item:any) {
    console.log(item)
    this.leagueChanged.emit(item);
    // this.leagueChanged.emit(item);
  }

  constructor(
    public sharedService: SharedService,
    public sharedLeagues: SharedLeagues,
    public alertService : AlertService
  ) {}

  changeSKU(event: Event) {
    console.log((<HTMLInputElement>event.target).value);
    this.sharedService.sharedVariable = (<HTMLInputElement>event.target).value;
  }

  @Input() leagues: any;

  handleLeagueChange(item: any) {
    console.log(item);
  }
  showAlert(){
    this.alertService.showAlert();
  }
}
