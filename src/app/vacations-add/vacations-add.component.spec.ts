import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationsAddComponent } from './vacations-add.component';

describe('VacationsAddComponent', () => {
  let component: VacationsAddComponent;
  let fixture: ComponentFixture<VacationsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacationsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
