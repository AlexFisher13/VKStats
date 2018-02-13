import { TestBed, inject } from '@angular/core/testing';

import { VkapiService } from './vkapi.service';

describe('VkapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VkapiService]
    });
  });

  it('should be created', inject([VkapiService], (service: VkapiService) => {
    expect(service).toBeTruthy();
  }));
});
