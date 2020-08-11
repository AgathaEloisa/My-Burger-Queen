import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifierClientComponent } from './identifier-client.component';

describe('IdentifierClientComponent', () => {
  let component: IdentifierClientComponent;
  let fixture: ComponentFixture<IdentifierClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentifierClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifierClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
