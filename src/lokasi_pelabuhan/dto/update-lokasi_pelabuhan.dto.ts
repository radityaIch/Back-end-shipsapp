import { createZodDto } from '@wahyubucil/nestjs-zod-openapi';
import {
  CreateLokasiPelabuhan,
  CreateLokasiPelabuhanResponse,
} from './create-lokasi_pelabuhan.dto';

export class UpdateLokasiPelabuhanDto extends createZodDto(
  CreateLokasiPelabuhan.partial(),
) {}
export class UpdateLokasiPelabuhanResponseDto extends createZodDto(
  CreateLokasiPelabuhanResponse,
) {}
