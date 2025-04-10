import { LedgerDto } from "@/dto/ledger/ledger.dto";
import { getApiUrl } from "@/tools/api";
import axios from "axios";

export const postSpent = async (ledgerDto: LedgerDto) => {
  const response = await axios.post<LedgerDto>(
    getApiUrl("/moneyboo/api/spent", ledgerDto)
  );

  return response.data;
};
