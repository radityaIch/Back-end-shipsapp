import { createZodDto } from '@wahyubucil/nestjs-zod-openapi';
import { z } from 'zod';

export const lokasiPelabuhan = z
  .object({
    id: z.string().cuid(),
    nama: z.string(),
  })
  .openapi('LokasiPelabuhan');

export class GetLokasiPelabuhanDto extends createZodDto(
  z.array(lokasiPelabuhan),
) {}
export class GetOneLokasiPelabuhanDto extends createZodDto(lokasiPelabuhan) {}
