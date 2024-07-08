import { TestBed } from '@angular/core/testing';

import { ServiceCrudAuthService } from './service-crud-auth.service';

describe('ServiceCrudAuthService', () => {
  let service: ServiceCrudAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCrudAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
