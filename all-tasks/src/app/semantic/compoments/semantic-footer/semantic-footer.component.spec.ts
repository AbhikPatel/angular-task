import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanticFooterComponent } from './semantic-footer.component';

describe('SemanticFooterComponent', () => {
  let component: SemanticFooterComponent;
  let fixture: ComponentFixture<SemanticFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemanticFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SemanticFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
