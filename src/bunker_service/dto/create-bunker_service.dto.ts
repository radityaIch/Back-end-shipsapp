import { createZodDto } from '@wahyubucil/nestjs-zod-openapi';
import { z } from 'zod';

export const CreateBunkerService = z
  .object({
    nama: z.string(),
  })
  .openapi('CreateBunkerService');

export const CreateBunkerServiceResponse = z
  .object({
    status: z.enum(['success', 'failed', 'unknown failed error']),
    code: z.string(),
    data: CreateBunkerService.optional(),
  })
  .openapi('CreateBunkerServiceResponse');

export class CreateBunkerServiceDto extends createZodDto(CreateBunkerService) {}
export class CreateBunkerServiceResponseDto extends createZodDto(
  CreateBunkerServiceResponse,
) {}
