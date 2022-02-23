import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroItemsComponent } from './zero-items.component';

describe('ZeroItemsComponent', () => {
  let component: ZeroItemsComponent;
  let fixture: ComponentFixture<ZeroItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZeroItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeroItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
