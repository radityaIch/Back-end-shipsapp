import { Module } from '@nestjs/common';
import { LogistikService } from './logistik.service';
import { LogistikController } from './logistik.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [LogistikController],
  providers: [LogistikService, PrismaService],
})
export class LogistikModule {}
