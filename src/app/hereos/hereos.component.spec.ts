import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HereosComponent } from './hereos.component';

hero = "Windstorm";
  
describe('HereosComponent', () => {
  let component: HereosComponent;
  let fixture: ComponentFixture<HereosComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HereosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HereosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
