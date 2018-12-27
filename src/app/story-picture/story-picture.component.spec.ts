import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryPictureComponent } from './story-picture.component';

describe('StoryPictureComponent', () => {
  let component: StoryPictureComponent;
  let fixture: ComponentFixture<StoryPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
