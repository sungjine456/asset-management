import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import CommonCode from "../../../models/requests/CommonCode";
import messages from "../../../../public/locales/messages";
import {
  useGetParents,
  useUpdateCommonCode,
} from "../../../../servicies/CommonCodeServices";

function CommonCodeUpdateModal(props: {
  isOpen: boolean;
  closeModal: Function;
  data: CommonCode;
}) {
  const getParents = useGetParents();
  const updateCommonCode = useUpdateCommonCode();

  const [parentCodes, setParentCodes] = useState<CommonCode[]>([]);

  const nameRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setValue("name", props.data.name);
    setValue("parent", props.data.parent);

    console.log("effect");

    getParents().then(setParentCodes);
  }, [props]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitted, errors },
  } = useForm<CommonCode>({
    mode: "onBlur",
    defaultValues: {
      parent: "",
      name: "",
    },
  });

  const onSubmit = (data: CommonCode) => {
    data.code = props.data.code;

    updateCommonCode(data).then((msg) => {
      alert(msg);

      if (messages["SUC"] === msg) {
        props.closeModal(true);
      } else {
        nameRef.current?.focus();
      }
    });
  };

  return (
    <Modal isOpen={props.isOpen} onRequestClose={() => props.closeModal()}>
      <div>
        <h3>공통코드 수정</h3>
        <form>
          <div>
            <span>공통코드 : {props.data.code}</span>
          </div>
          <div>
            <label>상위 코드</label>
            <select {...register("parent")}>
              <option value="">없음</option>
              {parentCodes.map((c) => {
                return (
                  <option value={c.code} key={c.code}>
                    {c.name}
                  </option>
                );
              })}
            </select>
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
              ref={(e) => {
                register("name").ref(e);
                nameRef.current = e;
              }}
            ></input>
          </div>
          <button
            className="btn"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            등록
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default CommonCodeUpdateModal;
