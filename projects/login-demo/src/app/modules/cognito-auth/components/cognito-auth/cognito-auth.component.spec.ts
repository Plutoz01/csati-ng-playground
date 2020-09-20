import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CognitoAuthComponent } from './cognito-auth.component';

describe('CognitoAuthComponent', () => {
  let component: CognitoAuthComponent;
  let fixture: ComponentFixture<CognitoAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CognitoAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CognitoAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
