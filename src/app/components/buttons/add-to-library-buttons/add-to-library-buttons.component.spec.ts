import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { AddToLibraryButtonsComponent } from './add-to-library-buttons.component';

describe('AddToLibraryButtonsComponent', () => {
  let component: AddToLibraryButtonsComponent;
  let fixture: ComponentFixture<AddToLibraryButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({})
      ],
      declarations: [ AddToLibraryButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToLibraryButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
