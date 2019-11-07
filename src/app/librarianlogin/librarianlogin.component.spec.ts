import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianloginComponent } from './librarianlogin.component';

describe('LibrarianloginComponent', () => {
  let component: LibrarianloginComponent;
  let fixture: ComponentFixture<LibrarianloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrarianloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarianloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
