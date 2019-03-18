import { async, TestBed } from '@angular/core/testing';
import { CoreRequestModule } from './core-request.module';

describe('CoreRequestModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreRequestModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CoreRequestModule).toBeDefined();
  });
});
