import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupIntroComponent } from './signup-intro.component';

describe('SignupIntroComponent', () => {
  let component: SignupIntroComponent;
  let fixture: ComponentFixture<SignupIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupIntroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
