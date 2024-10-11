import { createZodDto } from '@wahyubucil/nestjs-zod-openapi';
import { z } from 'zod';

export const deleteMarineService = z
  .object({
    status: z.enum(['success', 'failed', 'unknown failed error']),
    code: z.string(),
    id: z.string().cuid(),
  })
  .openapi('DeleteMarineServiceResponse');

export class DeleteMarineServiceResponseDto extends createZodDto(
  deleteMarineService,
) {}
