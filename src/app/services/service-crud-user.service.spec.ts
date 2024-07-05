import { TestBed } from '@angular/core/testing';

import { ServiceCrudUserService } from './service-crud-user.service';

describe('ServiceCrudUserService', () => {
  let service: ServiceCrudUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCrudUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
