import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareDownloadButtonsComponent } from './share-download-buttons.component';

describe('ShareDownloadButtonsComponent', () => {
  let component: ShareDownloadButtonsComponent;
  let fixture: ComponentFixture<ShareDownloadButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareDownloadButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareDownloadButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
