import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';
import { Club } from 'src/clubs/club.schema';
import { Player } from 'src/players/player.schema';

@Schema({
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class League {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  country: string;

  @Prop({ required: true })
  foundationYear: number;

  @Prop({ required: true })
  confederation: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Player', required: false })
  topScorer: Player;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Club', required: false })
  mostChampionships: Club;

  @Prop({ required: false, default: Date.now })
  createdBy: Date;
}

export type LeagueDocument = League & Document;
export const LeagueSchema = SchemaFactory.createForClass(League);
