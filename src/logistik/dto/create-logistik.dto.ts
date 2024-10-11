import { createZodDto } from '@wahyubucil/nestjs-zod-openapi';
import { z } from 'zod';

export const CreateLogistik = z
  .object({
    nama: z.string(),
  })
  .openapi('CreateLogistik');

export const CreateLogistikResponse = z
  .object({
    status: z.enum(['success', 'failed', 'unknown failed error']),
    code: z.string(),
    data: CreateLogistik.optional(),
  })
  .openapi('CreateLogistikResponse');

export class CreateLogistikDto extends createZodDto(CreateLogistik) {}
export class CreateLogistikResponseDto extends createZodDto(
  CreateLogistikResponse,
) {}
