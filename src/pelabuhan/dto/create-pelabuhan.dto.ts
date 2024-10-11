import { createZodDto } from '@wahyubucil/nestjs-zod-openapi';
import { z } from 'zod';

export const CreatePelabuhan = z
  .object({
    kode_pelabuhan: z.string().optional(),
    url_gambar: z.string(),
    nama_pelabuhan: z.string(),
    lokasi_pelabuhanId: z.string(),
  })
  .openapi('CreatePelabuhan');

export const CreatePelabuhanResponse = z
  .object({
    status: z.enum(['success', 'failed', 'unknown failed error']),
    code: z.string(),
    data: CreatePelabuhan.optional(),
  })
  .openapi('CreatePelabuhanResponse');

export class CreatePelabuhanDto extends createZodDto(CreatePelabuhan) {}
export class CreatePelabuhanResponseDto extends createZodDto(
  CreatePelabuhanResponse,
) {}
