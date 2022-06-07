import { applyDecorators } from '@nestjs/common';
import { IsNotEmpty, IsString } from 'class-validator';

export function StringField(): PropertyDecorator {
  const decorators = [IsNotEmpty(), IsString()];

  return applyDecorators(...decorators);
}
