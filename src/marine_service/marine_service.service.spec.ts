import { Test, TestingModule } from '@nestjs/testing';
import { MarineServiceService } from './marine_service.service';

describe('MarineServiceService', () => {
  let service: MarineServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarineServiceService],
    }).compile();

    service = module.get<MarineServiceService>(MarineServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
