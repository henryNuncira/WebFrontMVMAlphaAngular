import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoRadicadoComponent } from './nuevo-radicado.component';

describe('NuevoRadicadoComponent', () => {
  let component: NuevoRadicadoComponent;
  let fixture: ComponentFixture<NuevoRadicadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoRadicadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoRadicadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
