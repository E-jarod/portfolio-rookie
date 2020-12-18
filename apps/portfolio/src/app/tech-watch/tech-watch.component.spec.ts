import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechWatchComponent } from './tech-watch.component';

describe('TechWatchComponent', () => {
  let component: TechWatchComponent;
  let fixture: ComponentFixture<TechWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechWatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
