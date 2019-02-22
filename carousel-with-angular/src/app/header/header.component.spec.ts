import {async, fakeAsync, TestBed, tick, ComponentFixture} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HeaderComponent} from './header.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';

describe('HeaderComponent', () => {

  let headerComponent: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let expected = "";

  beforeEach(async(() => {
    expected = "Header Section";
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      schemas:[NO_ERRORS_SCHEMA],
      imports: [],
      providers: [],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    headerComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

    afterEach(() => {
      expected = "";
    });

    it('says Header Section', () => {
      expect(headerComponent.headersection())
          .toEqual(expected);
    });
  });
