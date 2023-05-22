
import { Injectable, OnInit } from '@angular/core';
import { CSInterface } from '@cep/csinterface';


@Injectable({
  providedIn: 'root'
})
export class AlertService{
  csInterface = new CSInterface();
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