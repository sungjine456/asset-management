import { del, getOrElse, isError, post } from "./AxiosWrapper";
import CommonCode from "../components/models/requests/CommonCode";
import messages from "../public/locales/messages";

export function useAddCommonCode(): (data: CommonCode) => Promise<string> {
  return (data: CommonCode) =>
    post<string>("/commonCode", data).then((res) => {
      if (isError(res)) {
        return res.errorMessage;
      }

      return messages[res];
    });
}

export function useUpdateCommonCode(): (data: CommonCode) => Promise<string> {
  return (data: CommonCode) =>
    post<string>("/commonCode/update", data).then((res) => {
      if (isError(res)) {
        return res.errorMessage;
      }

      return messages[res];
    });
}

export function useDeleteCommonCode(): (code: string) => Promise<string> {
  return (code: string) =>
    del<string>(`/commonCode/${code}`).then((res) => {
      if (isError(res)) {
        return res.errorMessage;
      }

      return messages[res];
    });
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
