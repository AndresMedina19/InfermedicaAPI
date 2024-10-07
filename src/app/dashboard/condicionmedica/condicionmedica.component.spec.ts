import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionmedicaComponent } from './condicionmedica.component';

describe('CondicionmedicaComponent', () => {
  let component: CondicionmedicaComponent;
  let fixture: ComponentFixture<CondicionmedicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CondicionmedicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CondicionmedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
