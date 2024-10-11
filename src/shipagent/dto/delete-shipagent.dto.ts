import { createZodDto } from '@wahyubucil/nestjs-zod-openapi';
import { z } from 'zod';

export const deleteShipagent = z
  .object({
    status: z.enum(['success', 'failed', 'unknown failed error']),
    code: z.string(),
    id: z.string().cuid(),
  })
  .openapi('DeleteShipagentResponse');

export class DeleteShipagentResponseDto extends createZodDto(deleteShipagent) {}
