/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserSessionDataService } from './user-session-data.service';

describe('UserSessionDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserSessionDataService]
    });
  });

  xit('should ...', inject([UserSessionDataService], (service: UserSessionDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllUserSessionData()', () => {
    xit('should return aan empty array by default', inject([UserSessionDataService], (service: UserSessionDataService) => {
      expect(service.getAllUserSessionData()).toEqual([]);
    }));
  });

});
