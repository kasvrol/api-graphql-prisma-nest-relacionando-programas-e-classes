import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Programa {
  @Field(() => ID, { description: 'Id do programa' })
  programaId: number;

  @Field(() => String, { description: 'nome do programa' })
  programaNome: string;

  @Field(() => String, { description: 'imagem do programa' })
  URLPrograma: string;

  @Field(() => Int, { description: 'classe do programa' })
  classeId: number;
}
