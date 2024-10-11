import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PelabuhanService } from './pelabuhan.service';
import {
  CreatePelabuhanDto,
  CreatePelabuhanResponseDto,
} from './dto/create-pelabuhan.dto';
import {
  UpdatePelabuhanDto,
  UpdatePelabuhanResponseDto,
} from './dto/update-pelabuhan.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import {
  GetOnePelabuhanDto,
  GetPelabuhanDto,
} from './entities/pelabuhan.entity';
import { DeletePelabuhanResponseDto } from './entities/pelabuhan.entity';

@ApiTags('Pelabuhan')
@Controller('pelabuhan')
export class PelabuhanController {
  constructor(private readonly pelabuhanService: PelabuhanService) {}

  @Post()
  @ApiOkResponse({ type: CreatePelabuhanResponseDto })
  async create(@Body() createPelabuhanDto: CreatePelabuhanDto) {
    const pelabuhan = await this.pelabuhanService.create(createPelabuhanDto);
    return CreatePelabuhanResponseDto.zodSchema.parse(pelabuhan);
  }

  @Get()
  @ApiOkResponse({ type: GetPelabuhanDto })
  async findAll() {
    return GetPelabuhanDto.zodSchema.parse(
      await this.pelabuhanService.findAll(),
    );
  }

  @Get(':id')
  @ApiOkResponse({ type: GetOnePelabuhanDto })
  async findOne(@Param('id') id: string) {
    return GetOnePelabuhanDto.zodSchema.parse(
      await this.pelabuhanService.findOne(id),
    );
  }

  @Patch(':id')
  @ApiOkResponse({ type: UpdatePelabuhanResponseDto })
  async update(
    @Param('id') id: string,
    @Body() updatePelabuhanDto: UpdatePelabuhanDto,
  ) {
    return UpdatePelabuhanResponseDto.zodSchema.parse(
      await this.pelabuhanService.update(id, updatePelabuhanDto),
    );
  }

  @Delete(':id')
  @ApiOkResponse({ type: DeletePelabuhanResponseDto })
  async remove(@Param('id') id: string) {
    return DeletePelabuhanResponseDto.zodSchema.parse(
      await this.pelabuhanService.remove(id),
    );
  }
}
