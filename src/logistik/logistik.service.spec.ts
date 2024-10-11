import { Test, TestingModule } from '@nestjs/testing';
import { LogistikService } from './logistik.service';

describe('LogistikService', () => {
  let service: LogistikService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogistikService],
    }).compile();

    service = module.get<LogistikService>(LogistikService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
