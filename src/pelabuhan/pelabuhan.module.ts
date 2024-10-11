import { Module } from '@nestjs/common';
import { PelabuhanService } from './pelabuhan.service';
import { PelabuhanController } from './pelabuhan.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [PelabuhanController],
  providers: [PelabuhanService, PrismaService],
})
export class PelabuhanModule {}
