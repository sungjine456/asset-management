import { useForm } from "react-hook-form";
import CommonCode from "../../../models/requests/CommonCode";
import { useLocation, useNavigate } from "react-router-dom";
import message from "../../../../public/locales/messages";
import { isError, post } from "../../../../servicies/AxiosWrapper";
import React, { useRef } from "react";

function CommonAdd() {
  const navigate = useNavigate();
  const location = useLocation();

  const codeRef = useRef<HTMLInputElement | null>(null);

  const {
    register,
    handleSubmit,
    formState: { isSubmitted, errors },
  } = useForm<CommonCode>({
    mode: "onBlur",
    defaultValues: {
      code: "",
      parent: location.state?.code,
      name: "",
    },
  });

  const onSubmit = (data: CommonCode) => {
    post<string>("/commonCode", data).then((res) => {
      if (isError(res)) {
        alert(res.errorMessage);
        codeRef.current?.focus();
      } else {
        if (res === "SUC") {
          navigate("/settings/commonCode/list");
        } else {
          codeRef.current?.focus();
        }

        alert(message[res]);
      }
    });
  };

  return (
    <>
      <h3>공통코드 등록</h3>
      <form>
        {location.state?.code && (
          <div>
            <span>상위 공통코드 : {location.state.code}</span>
            <br />
            <span>상위 공통코드 이름 : {location.state.name}</span>
          </div>
        )}
        <div>
          <label>공통코드</label>
          <input
            type="text"
            placeholder="공통코드"
            aria-invalid={
              isSubmitted ? (errors.code ? "true" : "false") : undefined
            }
            {...register("code", {
              required: "공통코드를 입력해주세요.",
            })}
            maxLength={5}
            ref={(e) => {
              register("code").ref(e);
              codeRef.current = e;
            }}
          ></input>
        </div>
        <div>
          <label>코드명</label>
          <input
            type="text"
            placeholder="코드명"
            aria-invalid={
              isSubmitted ? (errors.name ? "true" : "false") : undefined
            }
            {...register("name", {
              required: "코드명을 입력해주세요.",
            })}
          ></input>
        </div>
        <button className="btn" type="submit" onClick={handleSubmit(onSubmit)}>
          등록
        </button>
      </form>
    </>
  );
}

export default CommonAdd;
