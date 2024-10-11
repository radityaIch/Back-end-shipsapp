import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ShipagentService } from './shipagent.service';
import {
  CreateShipagentDto,
  CreateShipagentResponseDto,
} from './dto/create-shipagent.dto';
import {
  UpdateShipagentDto,
  UpdateShipagentResponseDto,
} from './dto/update-shipagent.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import {
  GetOneShipagentDto,
  GetShipagentDto,
} from './entities/shipagent.entity';
import { DeleteShipagentResponseDto } from './dto/delete-shipagent.dto';

@ApiTags('Shipagent')
@Controller('shipagents')
export class ShipagentController {
  constructor(private readonly shipagentService: ShipagentService) {}

  @Post()
  @ApiOkResponse({ type: CreateShipagentResponseDto })
  async create(@Body() createShipagentDto: CreateShipagentDto) {
    const shipagent = await this.shipagentService.create(createShipagentDto);
    return CreateShipagentResponseDto.zodSchema.parse(shipagent);
  }

  @Get()
  @ApiOkResponse({ type: GetShipagentDto })
  async findAll() {
    return GetShipagentDto.zodSchema.parse(
      await this.shipagentService.findAll(),
    );
  }

  @Get(':id')
  @ApiOkResponse({ type: GetOneShipagentDto })
  async findOne(@Param('id') id: string) {
    return GetOneShipagentDto.zodSchema.parse(
      await this.shipagentService.findOne(id),
    );
  }

  @Patch(':id')
  @ApiOkResponse({ type: UpdateShipagentResponseDto })
  async update(
    @Param('id') id: string,
    @Body() updateShipagentDto: UpdateShipagentDto,
  ) {
    return UpdateShipagentResponseDto.zodSchema.parse(
      await this.shipagentService.update(id, updateShipagentDto),
    );
  }

  @Delete(':id')
  @ApiOkResponse({ type: DeleteShipagentResponseDto })
  async remove(@Param('id') id: string) {
    return DeleteShipagentResponseDto.zodSchema.parse(
      await this.shipagentService.remove(id),
    );
  }
}
