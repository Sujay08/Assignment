import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GalleryHomePage } from './gallery-home.page';

describe('GalleryHomePage', () => {
  let component: GalleryHomePage;
  let fixture: ComponentFixture<GalleryHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GalleryHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
