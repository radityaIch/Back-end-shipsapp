import { createZodDto } from '@wahyubucil/nestjs-zod-openapi';
import { z } from 'zod';

export const deleteTrucking = z
  .object({
    status: z.enum(['success', 'failed', 'unknown failed error']),
    code: z.string(),
    id: z.string().cuid(),
  })
  .openapi('DeleteTruckingResponse');

export class DeleteTruckingResponseDto extends createZodDto(deleteTrucking) {}
