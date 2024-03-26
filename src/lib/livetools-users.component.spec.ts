import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivetoolsUsersComponent } from './livetools-users.component';

describe('LivetoolsUsersComponent', () => {
  let component: LivetoolsUsersComponent;
  let fixture: ComponentFixture<LivetoolsUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivetoolsUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivetoolsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
