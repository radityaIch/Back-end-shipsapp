import { createZodDto } from '@wahyubucil/nestjs-zod-openapi';
import { CreateTrucking, CreateTruckingResponse } from './create-trucking.dto';

export class UpdateTruckingDto extends createZodDto(CreateTrucking.partial()) {}
export class UpdateTruckingResponseDto extends createZodDto(
  CreateTruckingResponse,
) {}
