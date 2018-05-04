import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantBaseComponent } from './variant-base.component';

describe('VariantBaseComponent', () => {
  let component: VariantBaseComponent;
  let fixture: ComponentFixture<VariantBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariantBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariantBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
