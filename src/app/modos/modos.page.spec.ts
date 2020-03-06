import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModosPage } from './modos.page';

describe('ModosPage', () => {
  let component: ModosPage;
  let fixture: ComponentFixture<ModosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
