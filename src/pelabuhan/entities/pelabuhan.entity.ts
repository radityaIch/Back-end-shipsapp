import { createZodDto } from '@wahyubucil/nestjs-zod-openapi';
import { bunkerService } from 'src/bunker_service/entities/bunker_service.entity';
import { logistik } from 'src/logistik/entities/logistik.entity';
import { lokasiPelabuhan } from 'src/lokasi_pelabuhan/entities/lokasi_pelabuhan.entity';
import { marineService } from 'src/marine_service/entities/marine_service.entity';
import { shipagent } from 'src/shipagent/entities/shipagent.entity';
import { trucking } from 'src/trucking/entities/trucking.entity';
import { z } from 'zod';

export const pelabuhan = z
  .object({
    id: z.string().cuid(),
    kode_pelabuhan: z.string().optional().nullable(),
    url_gambar: z.string(),
    nama_pelabuhan: z.string(),
    lokasi_pelabuhan: lokasiPelabuhan,
    shipagents: z.array(shipagent),
    marine_services: z.array(marineService),
    logistiks: z.array(logistik),
    bunker_services: z.array(bunkerService),
    truckings: z.array(trucking),
  })
  .openapi('Pelabuhan');

export const deletePelabuhan = z
  .object({
    status: z.enum(['success', 'failed', 'unknown failed error']),
    code: z.string(),
    id: z.string().cuid(),
  })
  .openapi('DeletePelabuhanResponse');

export class DeletePelabuhanResponseDto extends createZodDto(deletePelabuhan) {}
export class GetPelabuhanDto extends createZodDto(z.array(pelabuhan)) {}
export class GetOnePelabuhanDto extends createZodDto(pelabuhan) {}
