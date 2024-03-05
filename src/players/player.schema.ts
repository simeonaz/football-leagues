import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';
import { Club } from 'src/clubs/club.schema';

@Schema({
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class Player {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  fullName: string;

  @Prop()
  country: string;

  @Prop({ type: Date, required: true })
  dateOfBirth: Date;

  @Prop()
  height: number;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Club', required: false })
  currentTeam: Club;

  @Prop({ type: [SchemaTypes.ObjectId], ref: 'Club', required: false })
  teamPlayedFor: Club[];

  @Prop({ required: false, default: Date.now })
  createdBy: Date;
}

export type PlayerDocument = Player & Document;
export const PlayerSchema = SchemaFactory.createForClass(Player);
