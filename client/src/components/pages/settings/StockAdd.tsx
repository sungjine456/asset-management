import { useForm } from "react-hook-form";
import Stock from "../../models/requests/Stock";
import { useNavigate } from "react-router-dom";
import message from "../../../public/locales/messages";
import { isError, post } from "../../../servicies/AxiosWrapper";

function StockAdd() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitted, errors },
  } = useForm<Stock>({
    mode: "onBlur",
    defaultValues: {
      code: "",
      name: "",
    },
  });

  const onSubmit = (data: Stock) => {
    post<string>("/stock", data).then((res) => {
      if (isError(res)) {
        alert(res.errorMessage);
      } else {
        if (res === "SUC") {
          navigate("/settings/stock/list");
        }

        alert(message[res]);
      }
    });
  };

  return (
    <>
      <h3>주식 등록</h3>
      <form>
        <div>
          <label>종목코드</label>
          <input
            type="text"
            placeholder="종목코드"
            aria-invalid={
              isSubmitted ? (errors.code ? "true" : "false") : undefined
            }
            {...register("code", {
              required: "종목코드를 입력해주세요.",
            })}
            maxLength={10}
          ></input>
        </div>
        <div>
          <label>종목명</label>
          <input
            type="text"
            placeholder="종목명"
            aria-invalid={
              isSubmitted ? (errors.name ? "true" : "false") : undefined
            }
            {...register("name", {
              required: "종목명을 입력해주세요.",
            })}
            maxLength={10}
          ></input>
        </div>
        <button type="submit" onClick={handleSubmit(onSubmit)}>
          등록
        </button>
      </form>
    </>
  );
}

export default StockAdd;
