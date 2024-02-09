import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Ground {
  @Prop()
  name: string;

  @Prop()
  capacity: string;
}

export const GroundSchema = SchemaFactory.createForClass(Ground);
