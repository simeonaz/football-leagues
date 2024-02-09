import { Module } from '@nestjs/common';
import { LeaguesService } from './leagues.service';
import { LeaguesController } from './leagues.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LeagueSchema } from './league.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'League', schema: LeagueSchema }]),
  ],
  controllers: [LeaguesController],
  providers: [LeaguesService],
})
export class LeaguesModule {}
