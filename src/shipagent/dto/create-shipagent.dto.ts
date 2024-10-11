import { createZodDto } from '@wahyubucil/nestjs-zod-openapi';
import { z } from 'zod';

export const CreateShipagent = z
  .object({
    nama: z.string(),
  })
  .openapi('CreateShipagent');

export const CreateShipagentResponse = z
  .object({
    status: z.enum(['success', 'failed', 'unknown failed error']),
    code: z.string(),
    data: CreateShipagent.optional(),
  })
  .openapi('CreateShipagentResponse');

export class CreateShipagentDto extends createZodDto(CreateShipagent) {}
export class CreateShipagentResponseDto extends createZodDto(
  CreateShipagentResponse,
) {}
