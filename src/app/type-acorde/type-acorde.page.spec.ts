import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TypeAcordePage } from './type-acorde.page';

describe('TypeAcordePage', () => {
  let component: TypeAcordePage;
  let fixture: ComponentFixture<TypeAcordePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeAcordePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TypeAcordePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
