import { Injectable } from '@nestjs/common';
import { CreateProgramaInput } from './dto/create-programa.input';
import { UpdateProgramaInput } from './dto/update-programa.input';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ProgramasService {
  constructor(private readonly prisma: PrismaService) {
    super(prisma.programa);
  }
  async criarPrograma(createProgramaInput: CreateProgramaInput) {
    return await this.criarPrograma({ createProgramaInput });
  }

  async encontrarTodosProgramas() {
    return `This action returns all programas`;
  }

  async encontrarUmPrograma(id: number) {
    return `This action returns a #${id} programa`;
  }

  async atualizarPrograma(
    id: number,
    updateProgramaInput: UpdateProgramaInput,
  ) {
    return `This action updates a #${id} programa`;
  }

  async removerPrograma(id: number) {
    return `This action removes a #${id} programa`;
  }
}
