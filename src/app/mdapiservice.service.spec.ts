import { TestBed } from '@angular/core/testing';

import { MdapiserviceService } from './mdapiservice.service';

describe('MdapiserviceService', () => {
  let service: MdapiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MdapiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
