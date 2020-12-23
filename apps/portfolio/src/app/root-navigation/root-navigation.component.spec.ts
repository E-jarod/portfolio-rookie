import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { RootNavigationComponent } from './root-navigation.component';
import { AppModule } from '../app.module';
import { APP_BASE_HREF } from '@angular/common';

describe('RootNavigationComponent', () => {
  let component: RootNavigationComponent;
  let fixture: ComponentFixture<RootNavigationComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, AppModule],
        providers: [{ provide: APP_BASE_HREF, useValue: '' }],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(RootNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
