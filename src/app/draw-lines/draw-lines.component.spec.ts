import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawLinesComponent } from './draw-lines.component';

describe('DrawLinesComponent', () => {
  let component: DrawLinesComponent;
  let fixture: ComponentFixture<DrawLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawLinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
