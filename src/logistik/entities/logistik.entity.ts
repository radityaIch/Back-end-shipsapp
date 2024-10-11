import { createZodDto } from '@wahyubucil/nestjs-zod-openapi';
import { z } from 'zod';

export const logistik = z
  .object({
    id: z.string().cuid(),
    nama: z.string(),
  })
  .openapi('Logistik');

export class GetLogistikDto extends createZodDto(z.array(logistik)) {}
export class GetOneLogistikDto extends createZodDto(logistik) {}
