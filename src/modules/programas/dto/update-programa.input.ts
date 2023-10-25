import { CreateProgramaInput } from './create-programa.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProgramaInput extends PartialType(CreateProgramaInput) {
  @Field(() => Int)
  programaId: number;
}
