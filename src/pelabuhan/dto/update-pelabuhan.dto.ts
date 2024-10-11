import { createZodDto } from '@wahyubucil/nestjs-zod-openapi';
import {
  CreatePelabuhan,
  CreatePelabuhanResponse,
} from './create-pelabuhan.dto';

export class UpdatePelabuhanDto extends createZodDto(
  CreatePelabuhan.partial(),
) {}
export class UpdatePelabuhanResponseDto extends createZodDto(
  CreatePelabuhanResponse,
) {}
