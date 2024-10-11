import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BunkerServiceService } from './bunker_service.service';
import {
  CreateBunkerServiceDto,
  CreateBunkerServiceResponseDto,
} from './dto/create-bunker_service.dto';
import {
  UpdateBunkerServiceDto,
  UpdateBunkerServiceResponseDto,
} from './dto/update-bunker_service.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import {
  GetOneBunkerServiceDto,
  GetBunkerServiceDto,
} from './entities/bunker_service.entity';
import { DeleteBunkerServiceResponseDto } from './dto/delete-bunker_service.dto';

@ApiTags('BunkerService')
@Controller('bunker-services')
export class BunkerServiceController {
  constructor(private readonly bunkerServiceService: BunkerServiceService) {}

  @Post()
  @ApiOkResponse({ type: CreateBunkerServiceResponseDto })
  async create(@Body() createBunkerServiceDto: CreateBunkerServiceDto) {
    const bunkerService = await this.bunkerServiceService.create(
      createBunkerServiceDto,
    );
    return CreateBunkerServiceResponseDto.zodSchema.parse(bunkerService);
  }

  @Get()
  @ApiOkResponse({ type: GetBunkerServiceDto })
  async findAll() {
    return GetBunkerServiceDto.zodSchema.parse(
      await this.bunkerServiceService.findAll(),
    );
  }

  @Get(':id')
  @ApiOkResponse({ type: GetOneBunkerServiceDto })
  async findOne(@Param('id') id: string) {
    return GetOneBunkerServiceDto.zodSchema.parse(
      await this.bunkerServiceService.findOne(id),
    );
  }

  @Patch(':id')
  @ApiOkResponse({ type: UpdateBunkerServiceResponseDto })
  async update(
    @Param('id') id: string,
    @Body() updateBunkerServiceDto: UpdateBunkerServiceDto,
  ) {
    return UpdateBunkerServiceResponseDto.zodSchema.parse(
      await this.bunkerServiceService.update(id, updateBunkerServiceDto),
    );
  }

  @Delete(':id')
  @ApiOkResponse({ type: DeleteBunkerServiceResponseDto })
  async remove(@Param('id') id: string) {
    return DeleteBunkerServiceResponseDto.zodSchema.parse(
      await this.bunkerServiceService.remove(id),
    );
  }
}
