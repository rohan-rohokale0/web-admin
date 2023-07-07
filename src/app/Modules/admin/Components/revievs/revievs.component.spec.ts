import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevievsComponent } from './revievs.component';

describe('RevievsComponent', () => {
  let component: RevievsComponent;
  let fixture: ComponentFixture<RevievsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevievsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevievsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
