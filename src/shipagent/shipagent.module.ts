import { Module } from '@nestjs/common';
import { ShipagentService } from './shipagent.service';
import { ShipagentController } from './shipagent.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ShipagentController],
  providers: [ShipagentService, PrismaService],
})
export class ShipagentModule {}
