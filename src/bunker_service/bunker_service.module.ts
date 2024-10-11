import { Module } from '@nestjs/common';
import { BunkerServiceService } from './bunker_service.service';
import { BunkerServiceController } from './bunker_service.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [BunkerServiceController],
  providers: [BunkerServiceService, PrismaService],
})
export class BunkerServiceModule {}
