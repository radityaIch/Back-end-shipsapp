import { Test, TestingModule } from '@nestjs/testing';
import { TruckingService } from './trucking.service';

describe('TruckingService', () => {
  let service: TruckingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TruckingService],
    }).compile();

    service = module.get<TruckingService>(TruckingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
