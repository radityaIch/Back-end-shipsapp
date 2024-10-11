import { createZodDto } from '@wahyubucil/nestjs-zod-openapi';
import { z } from 'zod';

export const deleteLogistik = z
  .object({
    status: z.enum(['success', 'failed', 'unknown failed error']),
    code: z.string(),
    id: z.string().cuid(),
  })
  .openapi('DeleteLogistikResponse');

export class DeleteLogistikResponseDto extends createZodDto(deleteLogistik) {}
