import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPathComponent } from './my-path.component';

describe('MyPathComponent', () => {
  let component: MyPathComponent;
  let fixture: ComponentFixture<MyPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPathComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
