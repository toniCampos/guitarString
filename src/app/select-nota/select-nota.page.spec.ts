import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectNotaPage } from './select-nota.page';

describe('SelectNotaPage', () => {
  let component: SelectNotaPage;
  let fixture: ComponentFixture<SelectNotaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectNotaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectNotaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
