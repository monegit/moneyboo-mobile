import { EmailDto } from "../common/email.dto";

export interface RegistryDto extends EmailDto {
  username: string;
  password: string;
}
