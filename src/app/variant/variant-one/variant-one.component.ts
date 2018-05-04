import { Component, OnInit } from '@angular/core';
import { VariantBaseComponent } from '../variant-base/variant-base.component';

@Component({
  selector: 'variant-one',
  templateUrl: '../variant-base/variant-base.component.html',
})
export class VariantOneComponent extends VariantBaseComponent implements OnInit {
  title: string = 'variant one!';

  constructor() { super(); }

  ngOnInit() {
  }

}
