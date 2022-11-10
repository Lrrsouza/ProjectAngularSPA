import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSpaComponent } from './home-spa.component';

describe('HomeSpaComponent', () => {
  let component: HomeSpaComponent;
  let fixture: ComponentFixture<HomeSpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSpaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
