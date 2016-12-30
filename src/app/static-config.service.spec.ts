/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StaticConfigService } from './static-config.service';

describe('StaticConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StaticConfigService]
    });
  });

  it('should ...', inject([StaticConfigService], (service: StaticConfigService) => {
    expect(service).toBeTruthy();
  }));
});
