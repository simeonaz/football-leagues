import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayersModule } from './players/players.module';
import { ClubsModule } from './clubs/clubs.module';
import { LeaguesModule } from './leagues/leagues.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/football'),
    PlayersModule,
    ClubsModule,
    LeaguesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
