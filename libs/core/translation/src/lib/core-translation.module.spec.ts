import { async, TestBed } from '@angular/core/testing';
import { CoreTranslationModule } from './core-translation.module';

describe('CoreTranslationModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreTranslationModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CoreTranslationModule).toBeDefined();
  });
});
