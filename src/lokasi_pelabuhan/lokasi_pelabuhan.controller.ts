import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LokasiPelabuhanService } from './lokasi_pelabuhan.service';
import {
  CreateLokasiPelabuhanDto,
  CreateLokasiPelabuhanResponseDto,
} from './dto/create-lokasi_pelabuhan.dto';
import {
  UpdateLokasiPelabuhanDto,
  UpdateLokasiPelabuhanResponseDto,
} from './dto/update-lokasi_pelabuhan.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import {
  GetOneLokasiPelabuhanDto,
  GetLokasiPelabuhanDto,
} from './entities/lokasi_pelabuhan.entity';
import { DeleteLokasiPelabuhanResponseDto } from './dto/delete-lokasi_pelabuhan.dto';

@ApiTags('LokasiPelabuhan')
@Controller('lokasi-pelabuhan')
export class LokasiPelabuhanController {
  constructor(
    private readonly lokasiPelabuhanService: LokasiPelabuhanService,
  ) {}

  @Post()
  @ApiOkResponse({ type: CreateLokasiPelabuhanResponseDto })
  async create(@Body() createLokasiPelabuhanDto: CreateLokasiPelabuhanDto) {
    const lokasiPelabuhan = await this.lokasiPelabuhanService.create(
      createLokasiPelabuhanDto,
    );
    return CreateLokasiPelabuhanResponseDto.zodSchema.parse(lokasiPelabuhan);
  }

  @Get()
  @ApiOkResponse({ type: GetLokasiPelabuhanDto })
  async findAll() {
    return GetLokasiPelabuhanDto.zodSchema.parse(
      await this.lokasiPelabuhanService.findAll(),
    );
  }

  @Get(':id')
  @ApiOkResponse({ type: GetOneLokasiPelabuhanDto })
  async findOne(@Param('id') id: string) {
    return GetOneLokasiPelabuhanDto.zodSchema.parse(
      await this.lokasiPelabuhanService.findOne(id),
    );
  }

  @Patch(':id')
  @ApiOkResponse({ type: UpdateLokasiPelabuhanResponseDto })
  async update(
    @Param('id') id: string,
    @Body() updateLokasiPelabuhanDto: UpdateLokasiPelabuhanDto,
  ) {
    return UpdateLokasiPelabuhanResponseDto.zodSchema.parse(
      await this.lokasiPelabuhanService.update(id, updateLokasiPelabuhanDto),
    );
  }

  @Delete(':id')
  @ApiOkResponse({ type: DeleteLokasiPelabuhanResponseDto })
  async remove(@Param('id') id: string) {
    return DeleteLokasiPelabuhanResponseDto.zodSchema.parse(
      await this.lokasiPelabuhanService.remove(id),
    );
  }
}
