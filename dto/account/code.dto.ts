import { EmailDto } from "../common/email.dto";

export interface CodeDto extends EmailDto {
  code: string;
}
