import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import {HttpClientModule} from "@angular/common/http";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CarouselComponent
      ],
      schemas:[NO_ERRORS_SCHEMA],
      imports: [HttpClientModule],
    }).compileComponents();
  }));

  xit('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'carousel-with-angular'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('carousel-with-angular');
  }));
});
