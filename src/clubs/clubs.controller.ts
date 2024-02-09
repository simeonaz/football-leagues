import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ClubsService } from './clubs.service';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';
import { Club } from './club.schema';

@Controller('clubs')
export class ClubsController {
  constructor(private readonly clubsService: ClubsService) {}

  @Post()
  async create(@Body() createClubDto: CreateClubDto): Promise<Club> {
    return await this.clubsService.create(createClubDto);
  }

  @Get()
  async findAll(): Promise<Club[]> {
    return await this.clubsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Club> {
    return await this.clubsService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateClubDto: UpdateClubDto,
  ): Promise<Club> {
    return await this.clubsService.update(id, updateClubDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Club> {
    return await this.clubsService.remove(id);
  }
}
