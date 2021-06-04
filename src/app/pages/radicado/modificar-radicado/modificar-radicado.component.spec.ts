import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarRadicadoComponent } from './modificar-radicado.component';

describe('ModificarRadicadoComponent', () => {
  let component: ModificarRadicadoComponent;
  let fixture: ComponentFixture<ModificarRadicadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarRadicadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarRadicadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
