import { createZodDto } from '@wahyubucil/nestjs-zod-openapi';
import { z } from 'zod';

export const CreateMarineService = z
  .object({
    nama: z.string(),
  })
  .openapi('CreateMarineService');

export const CreateMarineServiceResponse = z
  .object({
    status: z.enum(['success', 'failed', 'unknown failed error']),
    code: z.string(),
    data: CreateMarineService.optional(),
  })
  .openapi('CreateMarineServiceResponse');

export class CreateMarineServiceDto extends createZodDto(CreateMarineService) {}
export class CreateMarineServiceResponseDto extends createZodDto(
  CreateMarineServiceResponse,
) {}
