import { createZodDto } from '@wahyubucil/nestjs-zod-openapi';
import { CreateLogistik, CreateLogistikResponse } from './create-logistik.dto';

export class UpdateLogistikDto extends createZodDto(CreateLogistik.partial()) {}
export class UpdateLogistikResponseDto extends createZodDto(
  CreateLogistikResponse,
) {}
