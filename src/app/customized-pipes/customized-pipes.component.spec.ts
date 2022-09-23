import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedPipesComponent } from './customized-pipes.component';

describe('CustomizedPipesComponent', () => {
  let component: CustomizedPipesComponent;
  let fixture: ComponentFixture<CustomizedPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizedPipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizedPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
