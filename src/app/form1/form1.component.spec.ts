import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form1Component } from './form1.component';

describe('Form1Component', () => {
  let component: Form1Component;
  let fixture: ComponentFixture<Form1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create form component', () => {
    expect(component).toBeTruthy();
  });

  it(`should contain text 'Please rate and comment this beautiful app'`, async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('Please rate and comment this beautiful app:');
  }));

});
