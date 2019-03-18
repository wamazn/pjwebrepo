import { async, TestBed } from '@angular/core/testing';
import { CorePjMaterialModule } from './core-pjmaterial.module';

describe('CorePjmaterialModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CorePjMaterialModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CorePjMaterialModule).toBeDefined();
  });
});
