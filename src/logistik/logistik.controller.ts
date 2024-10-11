import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LogistikService } from './logistik.service';
import {
  CreateLogistikDto,
  CreateLogistikResponseDto,
} from './dto/create-logistik.dto';
import {
  UpdateLogistikDto,
  UpdateLogistikResponseDto,
} from './dto/update-logistik.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GetOneLogistikDto, GetLogistikDto } from './entities/logistik.entity';
import { DeleteLogistikResponseDto } from './dto/delete-logistik.dto';

@ApiTags('Logistik')
@Controller('marine-services')
export class LogistikController {
  constructor(private readonly LogistikService: LogistikService) {}

  @Post()
  @ApiOkResponse({ type: CreateLogistikResponseDto })
  async create(@Body() createLogistikDto: CreateLogistikDto) {
    const Logistik = await this.LogistikService.create(createLogistikDto);
    return CreateLogistikResponseDto.zodSchema.parse(Logistik);
  }

  @Get()
  @ApiOkResponse({ type: GetLogistikDto })
  async findAll() {
    return GetLogistikDto.zodSchema.parse(await this.LogistikService.findAll());
  }

  @Get(':id')
  @ApiOkResponse({ type: GetOneLogistikDto })
  async findOne(@Param('id') id: string) {
    return GetOneLogistikDto.zodSchema.parse(
      await this.LogistikService.findOne(id),
    );
  }

  @Patch(':id')
  @ApiOkResponse({ type: UpdateLogistikResponseDto })
  async update(
    @Param('id') id: string,
    @Body() updateLogistikDto: UpdateLogistikDto,
  ) {
    return UpdateLogistikResponseDto.zodSchema.parse(
      await this.LogistikService.update(id, updateLogistikDto),
    );
  }

  @Delete(':id')
  @ApiOkResponse({ type: DeleteLogistikResponseDto })
  async remove(@Param('id') id: string) {
    return DeleteLogistikResponseDto.zodSchema.parse(
      await this.LogistikService.remove(id),
    );
  }
}
