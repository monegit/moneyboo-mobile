import { AccountDto } from "@/dto/account/account.dto";
import { CodeDto } from "@/dto/account/code.dto";
import { EmailDto } from "@/dto/common/email.dto";
import { getApiUrl } from "@/tools/api";
import axios from "axios";

export const sendCode = async (emailDto: EmailDto): Promise<EmailDto> => {
  const response = await axios.post<EmailDto>(
    getApiUrl("/account/moneyboo/api/send-code", emailDto)
  );

  return response.data;
};

export const confirmCode = async (codeDto: CodeDto): Promise<CodeDto> => {
  const response = await axios.post<CodeDto>(
    getApiUrl("/account/moneyboo/api/confirm-code", codeDto)
  );

  return response.data;
};

export const createAccount = async (
  accountDto: AccountDto
): Promise<AccountDto> => {
  const response = await axios.post<AccountDto>(
    getApiUrl("/moneyboo/api/registry", accountDto)
  );

  return response.data;
};

export const tryLogin = async (accountDto: AccountDto): Promise<AccountDto> => {
  const response = await axios.get<AccountDto>(
    getApiUrl("/moneyboo/api/login", accountDto)
  );

  return response.data;
};
