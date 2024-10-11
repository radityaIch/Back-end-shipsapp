import { createZodDto } from '@wahyubucil/nestjs-zod-openapi';
import {
  CreateMarineService,
  CreateMarineServiceResponse,
} from './create-marine_service.dto';

export class UpdateMarineServiceDto extends createZodDto(
  CreateMarineService.partial(),
) {}
export class UpdateMarineServiceResponseDto extends createZodDto(
  CreateMarineServiceResponse,
) {}
