import { TestBed } from '@angular/core/testing';

import { ServiceCrudArticleService } from './service-crud-article.service';

describe('ServiceCrudArticleService', () => {
  let service: ServiceCrudArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCrudArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
