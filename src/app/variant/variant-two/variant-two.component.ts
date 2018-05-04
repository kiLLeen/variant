import { Component, OnInit } from '@angular/core';
import { VariantBaseComponent } from '../variant-base/variant-base.component';

@Component({
  selector: 'variant-two',
  templateUrl: '../variant-base/variant-base.component.html',
})
export class VariantTwoComponent extends VariantBaseComponent implements OnInit {
  title: string = 'variant two!';

  constructor() { super(); }

  ngOnInit() {
  }

}
