import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'variant-base',
  templateUrl: './variant-base.component.html',
})
export class VariantBaseComponent implements OnInit {
  title: string = 'variant base!';

  constructor() { }

  ngOnInit() {
  }

}
