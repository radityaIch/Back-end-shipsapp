import { Test, TestingModule } from '@nestjs/testing';
import { TruckingController } from './trucking.controller';
import { TruckingService } from './trucking.service';

describe('TruckingController', () => {
  let controller: TruckingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TruckingController],
      providers: [TruckingService],
    }).compile();

    controller = module.get<TruckingController>(TruckingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
