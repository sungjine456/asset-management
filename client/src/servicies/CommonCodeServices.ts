import { del, getOrElse, post } from "./AxiosWrapper";
import CommonCode from "../components/models/requests/CommonCode";
import Result from "../components/models/services/Result";
import { makeResult } from "./Utils";

export function useAddCommonCode(): (data: CommonCode) => Promise<Result> {
  return (data: CommonCode) =>
    post<string>("/commonCode", data).then(makeResult);
}

export function useUpdateCommonCode(): (data: CommonCode) => Promise<Result> {
  return (data: CommonCode) =>
    post<string>("/commonCode/update", data).then(makeResult);
}

export function useDeleteCommonCode(): (code: string) => Promise<Result> {
  return (code: string) => del<string>(`/commonCode/${code}`).then(makeResult);
}

export function useGetCommonCodes(): () => Promise<CommonCode[]> {
  return () =>
    getOrElse<CommonCode[]>("/commonCode/list", {}, []).then((res) => {
      return res;
    });
}

export function useGetParents(): () => Promise<CommonCode[]> {
  return () =>
    getOrElse<CommonCode[]>("/commonCode/parents", {}, []).then((res) => {
      return res;
    });
}
