import { Test, TestingModule } from '@nestjs/testing';
import { LokasiPelabuhanService } from './lokasi_pelabuhan.service';

describe('LokasiPelabuhanService', () => {
  let service: LokasiPelabuhanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LokasiPelabuhanService],
    }).compile();

    service = module.get<LokasiPelabuhanService>(LokasiPelabuhanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
