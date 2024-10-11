import { Test, TestingModule } from '@nestjs/testing';
import { LokasiPelabuhanController } from './lokasi_pelabuhan.controller';
import { LokasiPelabuhanService } from './lokasi_pelabuhan.service';

describe('LokasiPelabuhanController', () => {
  let controller: LokasiPelabuhanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LokasiPelabuhanController],
      providers: [LokasiPelabuhanService],
    }).compile();

    controller = module.get<LokasiPelabuhanController>(
      LokasiPelabuhanController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
