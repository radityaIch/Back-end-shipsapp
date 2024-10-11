import { createZodDto } from '@wahyubucil/nestjs-zod-openapi';
import { z } from 'zod';

export const trucking = z
  .object({
    id: z.string().cuid(),
    nama: z.string(),
  })
  .openapi('Trucking');

export class GetTruckingDto extends createZodDto(z.array(trucking)) {}
export class GetOneTruckingDto extends createZodDto(trucking) {}
