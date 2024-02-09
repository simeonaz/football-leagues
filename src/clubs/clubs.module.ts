import { Module } from '@nestjs/common';
import { ClubsService } from './clubs.service';
import { ClubsController } from './clubs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ClubSchema } from './club.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Club', schema: ClubSchema }])],
  controllers: [ClubsController],
  providers: [ClubsService],
})
export class ClubsModule {}
