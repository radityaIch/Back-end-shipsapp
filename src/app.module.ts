import { APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from '@wahyubucil/nestjs-zod-openapi';
import { ConfigModule } from '@nestjs/config';

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeliveryService, ongkir } from './fuzzy/fuzzy.service';
import { DeliveryController } from './fuzzy/fuzzy.controller';
import { VendorsModule } from './vendors/vendors.module';
import { PengirimanModule } from './pengiriman/pengiriman.module';
import { PrismaModule } from './prisma.module';
import { OrderModule } from './order/order.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { PelabuhanModule } from './pelabuhan/pelabuhan.module';
import { LokasiPelabuhanModule } from './lokasi_pelabuhan/lokasi_pelabuhan.module';
import { ShipagentModule } from './shipagent/shipagent.module';
import { BunkerServiceModule } from './bunker_service/bunker_service.module';
import { MarineServiceModule } from './marine_service/marine_service.module';
import { LogistikModule } from './logistik/logistik.module';
import { TruckingModule } from './trucking/trucking.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    VendorsModule,
    PengirimanModule,
    PrismaModule,
    OrderModule,
    MailerModule.forRoot({
      transport: {
        host: process.env.EMAIL_HOST,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
      },
    }),
    PelabuhanModule,
    LokasiPelabuhanModule,
    ShipagentModule,
    BunkerServiceModule,
    MarineServiceModule,
    LogistikModule,
    TruckingModule,
  ],
  controllers: [AppController, DeliveryController],
  providers: [
    AppService,
    ongkir,
    DeliveryService,
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule {}
