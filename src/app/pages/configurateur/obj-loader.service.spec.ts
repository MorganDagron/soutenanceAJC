import { TestBed } from '@angular/core/testing';

import { ObjLoaderService } from './obj-loader.service';

describe('ObjLoaderService', () => {
  let service: ObjLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
