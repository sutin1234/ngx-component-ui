import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxInputTextComponent } from './ngx-input-text.component';

describe('NgxInputTextComponent', () => {
  let component: NgxInputTextComponent;
  let fixture: ComponentFixture<NgxInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxInputTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
