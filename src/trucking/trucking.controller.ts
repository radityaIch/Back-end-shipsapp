import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TruckingService } from './trucking.service';
import {
  CreateTruckingDto,
  CreateTruckingResponseDto,
} from './dto/create-trucking.dto';
import {
  UpdateTruckingDto,
  UpdateTruckingResponseDto,
} from './dto/update-trucking.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GetOneTruckingDto, GetTruckingDto } from './entities/trucking.entity';
import { DeleteTruckingResponseDto } from './dto/delete-trucking.dto';

@ApiTags('Trucking')
@Controller('marine-services')
export class TruckingController {
  constructor(private readonly TruckingService: TruckingService) {}

  @Post()
  @ApiOkResponse({ type: CreateTruckingResponseDto })
  async create(@Body() createTruckingDto: CreateTruckingDto) {
    const Trucking = await this.TruckingService.create(createTruckingDto);
    return CreateTruckingResponseDto.zodSchema.parse(Trucking);
  }

  @Get()
  @ApiOkResponse({ type: GetTruckingDto })
  async findAll() {
    return GetTruckingDto.zodSchema.parse(await this.TruckingService.findAll());
  }

  @Get(':id')
  @ApiOkResponse({ type: GetOneTruckingDto })
  async findOne(@Param('id') id: string) {
    return GetOneTruckingDto.zodSchema.parse(
      await this.TruckingService.findOne(id),
    );
  }

  @Patch(':id')
  @ApiOkResponse({ type: UpdateTruckingResponseDto })
  async update(
    @Param('id') id: string,
    @Body() updateTruckingDto: UpdateTruckingDto,
  ) {
    return UpdateTruckingResponseDto.zodSchema.parse(
      await this.TruckingService.update(id, updateTruckingDto),
    );
  }

  @Delete(':id')
  @ApiOkResponse({ type: DeleteTruckingResponseDto })
  async remove(@Param('id') id: string) {
    return DeleteTruckingResponseDto.zodSchema.parse(
      await this.TruckingService.remove(id),
    );
  }
}
