
import { Injectable, OnInit } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AlertService{

     

  
  constructor() {
  }

  showAlert(): void {
    alert("Hello from ExtendScript");

    // this.csInterface.evalScript('alert("Hello from CEP extension!")', (result:any) => {
    //     console.log('Alert shown');
    //   });
    // this.csInterface.evalScript("custom()", function (results:any) {
    //     console.log("Number of open documents: " + results);
    //   });
  }
}