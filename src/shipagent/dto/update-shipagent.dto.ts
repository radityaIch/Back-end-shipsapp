import { createZodDto } from '@wahyubucil/nestjs-zod-openapi';
import {
  CreateShipagent,
  CreateShipagentResponse,
} from './create-shipagent.dto';

export class UpdateShipagentDto extends createZodDto(
  CreateShipagent.partial(),
) {}
export class UpdateShipagentResponseDto extends createZodDto(
  CreateShipagentResponse,
) {}
