import { Test, TestingModule } from '@nestjs/testing';
import { ShipagentService } from './shipagent.service';

describe('ShipagentService', () => {
  let service: ShipagentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShipagentService],
    }).compile();

    service = module.get<ShipagentService>(ShipagentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
