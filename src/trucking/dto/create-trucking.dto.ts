import { createZodDto } from '@wahyubucil/nestjs-zod-openapi';
import { z } from 'zod';

export const CreateTrucking = z
  .object({
    nama: z.string(),
  })
  .openapi('CreateTrucking');

export const CreateTruckingResponse = z
  .object({
    status: z.enum(['success', 'failed', 'unknown failed error']),
    code: z.string(),
    data: CreateTrucking.optional(),
  })
  .openapi('CreateTruckingResponse');

export class CreateTruckingDto extends createZodDto(CreateTrucking) {}
export class CreateTruckingResponseDto extends createZodDto(
  CreateTruckingResponse,
) {}
