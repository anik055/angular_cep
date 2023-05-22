import { Component, Input } from "@angular/core";
import { SharedService } from "../shared";

@Component({
  selector: "app-create-license",
  templateUrl: "./create-license.component.html",
  styleUrls: ["../app.component.css"],
})
export class CreateLicenseComponent {
  constructor(public sharedService: SharedService) {}
  ngOnInit() {
    // Initialization tasks
    this.selectedOption = this.leagues[0].name
    console.log(this.selectedOption)
  }

  @Input() leagues: any;
  
  handleLeagueChange(item: any) {
    console.log(item);
    this.selectedOption = item.name
  }

  prefillDetails: any = [
    {property: 'home', secondaryProperty : 'field', product: 'car', productCategory: 'self',productSubCategory : 'gadget', productDescription: 'this is a nice car'},
    {property: 'house', secondaryProperty : 'field', product: 'Bus', productCategory: 'family',productSubCategory : 'gear', productDescription: 'this is a nice Bus'},
    {property: 'room', secondaryProperty : 'field', product: 'Bike', productCategory: 'unknown',productSubCategory : 'auto', productDescription: 'this is a nice bike'},
  ]

  selectedPrefill:{
    property: string,
    secondaryProperty: string,
    product: string,
    productCategory: string,
    productSubCategory: string,
    productDescription: string
  }  = {
    property: '',
    secondaryProperty: '',
    product: '',
    productCategory: '',
    productSubCategory: '',
    productDescription: ''
  };
  prefillChange(item:any){
    console.log(item.value)
    this.selectedPrefill = this.prefillDetails.find((i:any)=>i.product ===item.value)
  }
  selectedOption: string = '';

  
}
