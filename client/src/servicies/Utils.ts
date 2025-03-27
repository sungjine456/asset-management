import Result from "../components/models/services/Result";
import messages from "../public/locales/messages";
import { isError, ServerError } from "./AxiosWrapper";

export function makeResult(res: string | ServerError): Result {
  if (isError(res)) {
    return {
      isSuccess: false,
      msg: res.errorMessage,
    };
  }

  return {
    isSuccess: true,
    msg: messages[res],
  };
}
