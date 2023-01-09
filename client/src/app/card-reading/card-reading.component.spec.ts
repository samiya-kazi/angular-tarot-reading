import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReadingComponent } from './card-reading.component';

describe('CardReadingComponent', () => {
  let component: CardReadingComponent;
  let fixture: ComponentFixture<CardReadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardReadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
