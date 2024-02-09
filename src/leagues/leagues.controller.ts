import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LeaguesService } from './leagues.service';
import { CreateLeagueDto } from './dto/create-league.dto';
import { UpdateLeagueDto } from './dto/update-league.dto';
import { League } from './league.schema';

@Controller('leagues')
export class LeaguesController {
  constructor(private readonly leaguesService: LeaguesService) {}

  @Post()
  async create(@Body() createLeagueDto: CreateLeagueDto): Promise<League> {
    return await this.leaguesService.create(createLeagueDto);
  }

  @Get()
  async findAll(): Promise<League[]> {
    return await this.leaguesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<League> {
    return await this.leaguesService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateLeagueDto: UpdateLeagueDto,
  ): Promise<League> {
    return await this.leaguesService.update(id, updateLeagueDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<League> {
    return await this.leaguesService.remove(id);
  }
}
