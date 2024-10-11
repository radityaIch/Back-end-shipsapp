import { createZodDto } from '@wahyubucil/nestjs-zod-openapi';
import { z } from 'zod';

export const shipagent = z
  .object({
    id: z.string().cuid(),
    nama: z.string(),
  })
  .openapi('Shipagent');

export class GetShipagentDto extends createZodDto(z.array(shipagent)) {}
export class GetOneShipagentDto extends createZodDto(shipagent) {}
