/* eslint-disable prettier/prettier */
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProgramasService } from './programas.service';
import { Programa } from './entities/programa.entity';
import { CreateProgramaInput } from './dto/create-programa.input';
import { UpdateProgramaInput } from './dto/update-programa.input';

@Resolver(() => Programa)
export class ProgramasResolver {
  constructor(private readonly programasService: ProgramasService) {}

  @Mutation(() => Programa)
  createPrograma(
    @Args('createProgramaInput') createProgramaInput: CreateProgramaInput,
  ) {
    return this.programasService.criarPrograma(createProgramaInput);
  }

  @Query(() => [Programa], { name: 'programas' })
  findAll() {
    return this.programasService.encontrarTodosProgramas();
  }

  @Query(() => Programa, { name: 'programa' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.programasService.encontrarUmPrograma(id);
  }

  @Mutation(() => Programa)
  updatePrograma(
    @Args('updateProgramaInput') updateProgramaInput: UpdateProgramaInput,
  ) {
    return this.programasService.atualizarPrograma(
      updateProgramaInput.programaId,
      updateProgramaInput,
    );
  }

  @Mutation(() => Programa)
  removePrograma(@Args('id', { type: () => Int }) id: number) {
    return this.programasService.removerPrograma(id);
  }
}
