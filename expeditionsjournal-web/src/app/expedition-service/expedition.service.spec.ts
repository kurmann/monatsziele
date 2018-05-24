/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExpeditionService } from './expedition.service';

describe('Service: Expedition', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpeditionService]
    });
  });

  it('should ...', inject([ExpeditionService], (service: ExpeditionService) => {
    expect(service).toBeTruthy();
  }));
});
