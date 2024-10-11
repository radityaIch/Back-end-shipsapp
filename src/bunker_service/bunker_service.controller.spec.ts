import { Test, TestingModule } from '@nestjs/testing';
import { BunkerServiceController } from './bunker_service.controller';
import { BunkerServiceService } from './bunker_service.service';

describe('BunkerServiceController', () => {
  let controller: BunkerServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BunkerServiceController],
      providers: [BunkerServiceService],
    }).compile();

    controller = module.get<BunkerServiceController>(BunkerServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
