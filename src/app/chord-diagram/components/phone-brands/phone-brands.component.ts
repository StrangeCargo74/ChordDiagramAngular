import { Component, Input, OnInit } from '@angular/core';
import { PhoneBrandViewModel } from '../../view-models/phone-brand.viewmodel';

@Component({
  selector: '[app-phone-brands]',
  templateUrl: './phone-brands.component.html',
  styleUrls: ['./phone-brands.component.scss']
})
export class PhoneBrandsComponent{

  @Input() public phoneBrandVms: Array<PhoneBrandViewModel> = [];

  constructor() { }

}
