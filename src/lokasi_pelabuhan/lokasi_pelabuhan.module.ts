import { Module } from '@nestjs/common';
import { LokasiPelabuhanService } from './lokasi_pelabuhan.service';
import { LokasiPelabuhanController } from './lokasi_pelabuhan.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [LokasiPelabuhanController],
  providers: [LokasiPelabuhanService, PrismaService],
})
export class LokasiPelabuhanModule {}
