import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPipesComponent } from './data-pipes.component';

describe('DataPipesComponent', () => {
  let component: DataPipesComponent;
  let fixture: ComponentFixture<DataPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataPipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
