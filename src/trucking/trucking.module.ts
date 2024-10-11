import { Module } from '@nestjs/common';
import { TruckingService } from './trucking.service';
import { TruckingController } from './trucking.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TruckingController],
  providers: [TruckingService, PrismaService],
})
export class TruckingModule {}
