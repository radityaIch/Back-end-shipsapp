import { createZodDto } from '@wahyubucil/nestjs-zod-openapi';
import {
  CreateBunkerService,
  CreateBunkerServiceResponse,
} from './create-bunker_service.dto';

export class UpdateBunkerServiceDto extends createZodDto(
  CreateBunkerService.partial(),
) {}
export class UpdateBunkerServiceResponseDto extends createZodDto(
  CreateBunkerServiceResponse,
) {}
