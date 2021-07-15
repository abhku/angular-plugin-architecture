import { TestBed } from '@angular/core/testing';

import { PluginAService } from './plugin-a.service';

describe('PluginAService', () => {
  let service: PluginAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PluginAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
