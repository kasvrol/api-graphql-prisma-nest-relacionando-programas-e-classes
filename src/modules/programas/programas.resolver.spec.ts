import { Test, TestingModule } from '@nestjs/testing';
import { ProgramasResolver } from './programas.resolver';
import { ProgramasService } from './programas.service';

describe('ProgramasResolver', () => {
  let resolver: ProgramasResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProgramasResolver, ProgramasService],
    }).compile();

    resolver = module.get<ProgramasResolver>(ProgramasResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
