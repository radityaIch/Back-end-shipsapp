import { createZodDto } from '@wahyubucil/nestjs-zod-openapi';
import { z } from 'zod';

export const marineService = z
  .object({
    id: z.string().cuid(),
    nama: z.string(),
  })
  .openapi('MarineService');

export class GetMarineServiceDto extends createZodDto(z.array(marineService)) {}
export class GetOneMarineServiceDto extends createZodDto(marineService) {}
