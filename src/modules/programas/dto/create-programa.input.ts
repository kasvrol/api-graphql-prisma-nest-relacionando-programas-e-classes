import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { IsInt, Length, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateProgramaInput {
  @Field(() => ID, { description: 'Id do programa' })
  @IsNotEmpty()
  programaId: number;

  @Field(() => String, { description: 'nome do programa' })
  @IsNotEmpty()
  @Length(3, 255)
  programaNome: string;

  @Field(() => String, { description: 'imagem do programa' })
  @Length(3, 255)
  URLPrograma: string;

  @Field(() => Int, { description: 'classe do programa' })
  @IsNotEmpty()
  @IsInt()
  classeId: number;
}
