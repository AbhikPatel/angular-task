import { TestBed } from '@angular/core/testing';

import { MvpDemoService } from './mvp-demo.service';

describe('MvpDemoService', () => {
  let service: MvpDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MvpDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
