import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRecetarioComponent } from './crear-recetario.component';

describe('CrearRecetarioComponent', () => {
  let component: CrearRecetarioComponent;
  let fixture: ComponentFixture<CrearRecetarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearRecetarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearRecetarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
