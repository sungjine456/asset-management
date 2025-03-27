import Stock from "../components/models/requests/Stock";
import Result from "../components/models/services/Result";
import { getOrElse, post } from "./AxiosWrapper";
import { makeResult } from "./Utils";

export function useAddStock(): (data: Stock) => Promise<Result> {
  return (data: Stock) => post<string>("/stock", data).then(makeResult);
}

export function useGetStocks(): () => Promise<Stock[]> {
  return () =>
    getOrElse<Stock[]>("/stock/list", {}, []).then((res) => {
      return res;
    });
}
