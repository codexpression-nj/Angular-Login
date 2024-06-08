import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninIntroComponent } from './signin-intro.component';

describe('SigninIntroComponent', () => {
  let component: SigninIntroComponent;
  let fixture: ComponentFixture<SigninIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigninIntroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
