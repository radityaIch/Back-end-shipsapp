import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MarineServiceService } from './marine_service.service';
import {
  CreateMarineServiceDto,
  CreateMarineServiceResponseDto,
} from './dto/create-marine_service.dto';
import {
  UpdateMarineServiceDto,
  UpdateMarineServiceResponseDto,
} from './dto/update-marine_service.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import {
  GetOneMarineServiceDto,
  GetMarineServiceDto,
} from './entities/marine_service.entity';
import { DeleteMarineServiceResponseDto } from './dto/delete-marine_service.dto';

@ApiTags('MarineService')
@Controller('marine-services')
export class MarineServiceController {
  constructor(private readonly marineServiceService: MarineServiceService) {}

  @Post()
  @ApiOkResponse({ type: CreateMarineServiceResponseDto })
  async create(@Body() createMarineServiceDto: CreateMarineServiceDto) {
    const marineService = await this.marineServiceService.create(
      createMarineServiceDto,
    );
    return CreateMarineServiceResponseDto.zodSchema.parse(marineService);
  }

  @Get()
  @ApiOkResponse({ type: GetMarineServiceDto })
  async findAll() {
    return GetMarineServiceDto.zodSchema.parse(
      await this.marineServiceService.findAll(),
    );
  }

  @Get(':id')
  @ApiOkResponse({ type: GetOneMarineServiceDto })
  async findOne(@Param('id') id: string) {
    return GetOneMarineServiceDto.zodSchema.parse(
      await this.marineServiceService.findOne(id),
    );
  }

  @Patch(':id')
  @ApiOkResponse({ type: UpdateMarineServiceResponseDto })
  async update(
    @Param('id') id: string,
    @Body() updateMarineServiceDto: UpdateMarineServiceDto,
  ) {
    return UpdateMarineServiceResponseDto.zodSchema.parse(
      await this.marineServiceService.update(id, updateMarineServiceDto),
    );
  }

  @Delete(':id')
  @ApiOkResponse({ type: DeleteMarineServiceResponseDto })
  async remove(@Param('id') id: string) {
    return DeleteMarineServiceResponseDto.zodSchema.parse(
      await this.marineServiceService.remove(id),
    );
  }
}
