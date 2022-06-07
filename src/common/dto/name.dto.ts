import { StringField } from 'src/decorators/field.decorator';

export class NameDto {
  @StringField()
  name: string;
}
