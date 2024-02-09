import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './player.schema';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  async create(@Body() createPlayerDto: CreatePlayerDto): Promise<Player> {
    return await this.playersService.create(createPlayerDto);
  }

  @Get()
  async findAll(): Promise<Player[]> {
    return await this.playersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Player> {
    return await this.playersService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePlayerDto: UpdatePlayerDto,
  ): Promise<Player> {
    return await this.playersService.update(id, updatePlayerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Player> {
    return await this.playersService.remove(id);
  }

  @Get(':id/age')
  async getAge(@Param('id') id: string): Promise<number> {
    return await this.playersService.getAge(id);
  }
}
