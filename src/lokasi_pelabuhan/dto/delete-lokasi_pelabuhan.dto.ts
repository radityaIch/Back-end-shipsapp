import { createZodDto } from '@wahyubucil/nestjs-zod-openapi';
import { z } from 'zod';

export const deleteLokasiPelabuhan = z
  .object({
    status: z.enum(['success', 'failed', 'unknown failed error']),
    code: z.string(),
    id: z.string().cuid(),
  })
  .openapi('DeleteLokasiPelabuhanResponse');

export class DeleteLokasiPelabuhanResponseDto extends createZodDto(
  deleteLokasiPelabuhan,
) {}
