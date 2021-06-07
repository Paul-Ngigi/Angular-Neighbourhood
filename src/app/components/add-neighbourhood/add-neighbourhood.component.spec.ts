import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNeighbourhoodComponent } from './add-neighbourhood.component';

describe('AddNeighbourhoodComponent', () => {
  let component: AddNeighbourhoodComponent;
  let fixture: ComponentFixture<AddNeighbourhoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNeighbourhoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNeighbourhoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
