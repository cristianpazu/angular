import { TestBed } from '@angular/core/testing';

import { StiendaServiceService } from './stienda-service.service';

describe('StiendaServiceService', () => {
  let service: StiendaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StiendaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
