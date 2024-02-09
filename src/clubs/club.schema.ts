import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Ground } from 'src/subdocs/ground.subdocs';
import { SchemaTypes } from 'mongoose';
import { League } from 'src/leagues/league.schema';

@Schema()
export class Club {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [String] })
  nicknames: string[];

  @Prop()
  slogan: string;

  @Prop({ type: Date, required: true })
  foundationDate: Date;

  @Prop({ type: Ground })
  ground: Ground;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'League', required: false })
  league: League;

  @Prop({ required: false, default: Date.now })
  createdBy: Date;
}

export type ClubDocument = Club & Document;
export const ClubSchema = SchemaFactory.createForClass(Club);
