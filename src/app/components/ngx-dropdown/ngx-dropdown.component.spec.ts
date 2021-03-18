import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDropdownComponent } from './ngx-dropdown.component';

describe('NgxDropdownComponent', () => {
  let component: NgxDropdownComponent;
  let fixture: ComponentFixture<NgxDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
