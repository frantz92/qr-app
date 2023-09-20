import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedComponent } from './generated.component';

describe('GeneratedComponent', () => {
  let component: GeneratedComponent;
  let fixture: ComponentFixture<GeneratedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneratedComponent]
    });
    fixture = TestBed.createComponent(GeneratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
