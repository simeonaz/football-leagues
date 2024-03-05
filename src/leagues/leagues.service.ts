import { Injectable } from '@nestjs/common';
import { CreateLeagueDto } from './dto/create-league.dto';
import { UpdateLeagueDto } from './dto/update-league.dto';
import { Model } from 'mongoose';
import { League, LeagueDocument } from './league.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class LeaguesService {
  constructor(
    @InjectModel(League.name)
    private readonly LeagueModel: Model<LeagueDocument>,
  ) {}

  async create(createLeagueDto: CreateLeagueDto): Promise<League> {
    const leagueToCreate = new this.LeagueModel(createLeagueDto);
    return await leagueToCreate.save();
  }

  async findAll(): Promise<League[]> {
    return await this.LeagueModel.find()
      .populate(['topScorer', 'mostChampionships'])
      .exec();
  }

  async findOne(id: string): Promise<League> {
    return await this.LeagueModel.findById(id)
      .populate(['topScorer', 'mostChampionships'])
      .exec();
  }

  async update(id: string, updateLeagueDto: UpdateLeagueDto): Promise<League> {
    return await this.LeagueModel.findByIdAndUpdate(id, updateLeagueDto, {
      new: true,
    });
  }

  async remove(id: string): Promise<League> {
    return await this.LeagueModel.findByIdAndDelete(id);
  }
}
