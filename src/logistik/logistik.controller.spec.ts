import { Test, TestingModule } from '@nestjs/testing';
import { LogistikController } from './logistik.controller';
import { LogistikService } from './logistik.service';

describe('LogistikController', () => {
  let controller: LogistikController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogistikController],
      providers: [LogistikService],
    }).compile();

    controller = module.get<LogistikController>(LogistikController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
