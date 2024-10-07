import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuprincipalComponent } from './menuprincipal.component';

describe('MenuprincipalComponent', () => {
  let component: MenuprincipalComponent;
  let fixture: ComponentFixture<MenuprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuprincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
