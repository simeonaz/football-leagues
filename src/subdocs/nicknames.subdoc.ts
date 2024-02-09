import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Nickname {
  @Prop()
  original: string;

  @Prop()
  englishVersion: string;
}

export const NicknameSchema = SchemaFactory.createForClass(Nickname);
