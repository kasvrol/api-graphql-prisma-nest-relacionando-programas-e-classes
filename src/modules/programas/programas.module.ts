import { Module } from '@nestjs/common';
import { ProgramasService } from './programas.service';
import { ProgramasResolver } from './programas.resolver';

@Module({
  providers: [ProgramasResolver, ProgramasService],
})
export class ProgramasModule {}
