import { TestBed } from '@angular/core/testing';

import { AlunosService } from './aluno.service';

describe('AlunoService', () => {
  let service: AlunosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlunosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
