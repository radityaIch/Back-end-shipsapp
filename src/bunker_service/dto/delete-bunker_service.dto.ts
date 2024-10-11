import { createZodDto } from '@wahyubucil/nestjs-zod-openapi';
import { z } from 'zod';

export const deleteBunkerService = z
  .object({
    status: z.enum(['success', 'failed', 'unknown failed error']),
    code: z.string(),
    id: z.string().cuid(),
  })
  .openapi('DeleteBunkerServiceResponse');

export class DeleteBunkerServiceResponseDto extends createZodDto(
  deleteBunkerService,
) {}
