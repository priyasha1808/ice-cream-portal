import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddflavourComponent } from './addflavour.component';

describe('AddflavourComponent', () => {
  let component: AddflavourComponent;
  let fixture: ComponentFixture<AddflavourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddflavourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddflavourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
