import { Test, TestingModule } from '@nestjs/testing';
import { MarineServiceController } from './marine_service.controller';
import { MarineServiceService } from './marine_service.service';

describe('MarineServiceController', () => {
  let controller: MarineServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarineServiceController],
      providers: [MarineServiceService],
    }).compile();

    controller = module.get<MarineServiceController>(MarineServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
