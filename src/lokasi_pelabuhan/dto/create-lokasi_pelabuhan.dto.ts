import { createZodDto } from '@wahyubucil/nestjs-zod-openapi';
import { z } from 'zod';

export const CreateLokasiPelabuhan = z
  .object({
    nama: z.string().default(''),
  })
  .openapi('CreateLokasiPelabuhan');

export const CreateLokasiPelabuhanResponse = z
  .object({
    status: z.enum(['success', 'failed', 'unknown failed error']),
    code: z.string(),
    data: CreateLokasiPelabuhan.optional(),
  })
  .openapi('CreateLokasiPelabuhanResponse');

export class CreateLokasiPelabuhanDto extends createZodDto(
  CreateLokasiPelabuhan,
) {}
export class CreateLokasiPelabuhanResponseDto extends createZodDto(
  CreateLokasiPelabuhanResponse,
) {}
