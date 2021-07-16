import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'country region selection'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('country region selection');
  });

  it('should render drop down with regions', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('[data-test="regions"]')).toBeTruthy();
  });

  xit('should render drop down with countries once region selected', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    //app.region = 'europe';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('[data-test="countries"]')).toBeTruthy();
  });
});
