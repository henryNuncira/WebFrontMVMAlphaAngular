import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoRadicadoComponent } from './listado-radicado.component';

describe('ListadoRadicadoComponent', () => {
  let component: ListadoRadicadoComponent;
  let fixture: ComponentFixture<ListadoRadicadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoRadicadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoRadicadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
