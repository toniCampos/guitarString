import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectEscalaPage } from './select-escala.page';

describe('SelectEscalaPage', () => {
  let component: SelectEscalaPage;
  let fixture: ComponentFixture<SelectEscalaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectEscalaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectEscalaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
