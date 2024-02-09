import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Model } from 'mongoose';
import { Player, PlayerDocument } from './player.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PlayersService {
  constructor(
    @InjectModel(Player.name)
    private readonly PlayerModel: Model<PlayerDocument>,
  ) {}

  async create(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const playerToCreate = new this.PlayerModel(createPlayerDto);
    return await playerToCreate.save();
  }

  async findAll(): Promise<Player[]> {
    return await this.PlayerModel.find().exec();
  }

  async findOne(id: string): Promise<Player> {
    return await this.PlayerModel.findById(id).exec();
  }

  async update(id: string, updatePlayerDto: UpdatePlayerDto): Promise<Player> {
    return await this.PlayerModel.findByIdAndUpdate(id, updatePlayerDto, {
      new: true,
    });
  }

  async remove(id: string): Promise<Player> {
    return await this.PlayerModel.findByIdAndDelete(id);
  }

  async getAge(id: string): Promise<number> {
    const birthDate = (await this.PlayerModel.findById(id)).dateOfBirth;
    const today = new Date();
    const currentYear = today.getFullYear();
    const yearOfBirth = birthDate.getFullYear();

    let age = currentYear - yearOfBirth;

    const currentMonth = today.getMonth();
    const birthMonth = birthDate.getMonth();

    if (
      currentMonth < birthMonth ||
      (currentMonth === birthMonth && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  }
}
