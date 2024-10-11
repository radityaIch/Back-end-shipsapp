import { Module } from '@nestjs/common';
import { MarineServiceService } from './marine_service.service';
import { MarineServiceController } from './marine_service.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [MarineServiceController],
  providers: [MarineServiceService, PrismaService],
})
export class MarineServiceModule {}
