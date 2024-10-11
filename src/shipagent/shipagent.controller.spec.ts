import { Test, TestingModule } from '@nestjs/testing';
import { ShipagentController } from './shipagent.controller';
import { ShipagentService } from './shipagent.service';

describe('ShipagentController', () => {
  let controller: ShipagentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShipagentController],
      providers: [ShipagentService],
    }).compile();

    controller = module.get<ShipagentController>(ShipagentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
