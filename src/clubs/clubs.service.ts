import { Injectable } from '@nestjs/common';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';
import { Club, ClubDocument } from './club.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ClubsService {
  constructor(
    @InjectModel(Club.name) private readonly ClubModel: Model<ClubDocument>,
  ) {}

  async create(createClubDto: CreateClubDto): Promise<Club> {
    const clubToCreate = new this.ClubModel(createClubDto);
    return await clubToCreate.save();
  }

  async findAll(): Promise<Club[]> {
    return await this.ClubModel.find().populate(['league']).exec();
  }

  async findOne(id: string): Promise<Club> {
    return await this.ClubModel.findById(id).populate(['league']).exec();
  }

  async update(id: string, updateClubDto: UpdateClubDto): Promise<Club> {
    return await this.ClubModel.findByIdAndUpdate(id, updateClubDto, {
      new: true,
    });
  }

  async remove(id: string): Promise<Club> {
    return await this.ClubModel.findByIdAndDelete(id);
  }
}
