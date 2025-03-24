import Stock from "../components/models/requests/Stock";
import messages from "../public/locales/messages";
import { getOrElse, isError, post } from "./AxiosWrapper";

export function useAddStock(): (data: Stock) => Promise<string> {
  return (data: Stock) =>
    post<string>("/stock", data).then((res) => {
      if (isError(res)) {
        return res.errorMessage;
      } else {
        return messages[res];
      }
    });
}

export function useGetStocks(): () => Promise<Stock[]> {
  return () =>
    getOrElse<Stock[]>("/stock/list", {}, []).then((res) => {
      return res;
    });
}
