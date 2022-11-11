import { TestBed } from '@angular/core/testing';

import { ApiGitHubService } from './api-git-hub.service';

describe('ApiGitHubService', () => {
  let service: ApiGitHubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiGitHubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
