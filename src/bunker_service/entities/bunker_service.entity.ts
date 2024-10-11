import { createZodDto } from '@wahyubucil/nestjs-zod-openapi';
import { z } from 'zod';

export const bunkerService = z
  .object({
    id: z.string().cuid(),
    nama: z.string(),
  })
  .openapi('BunkerService');

export class GetBunkerServiceDto extends createZodDto(z.array(bunkerService)) {}
export class GetOneBunkerServiceDto extends createZodDto(bunkerService) {}
