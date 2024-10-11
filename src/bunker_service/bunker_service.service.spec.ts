import { Test, TestingModule } from '@nestjs/testing';
import { BunkerServiceService } from './bunker_service.service';

describe('BunkerServiceService', () => {
  let service: BunkerServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BunkerServiceService],
    }).compile();

    service = module.get<BunkerServiceService>(BunkerServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
