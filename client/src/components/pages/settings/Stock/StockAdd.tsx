import { useForm } from "react-hook-form";
import Stock from "../../../models/requests/Stock";
import { useNavigate } from "react-router-dom";
import messages from "../../../../public/locales/messages";
import React, { useEffect, useRef, useState } from "react";
import { useAddStock } from "../../../../servicies/StockServices";
import { useQuery } from "@tanstack/react-query";
import { useGetCommonCodes } from "../../../../servicies/CommonCodeServices";

function StockAdd() {
  const navigate = useNavigate();
  const addStock = useAddStock();
  const getCommonCodes = useGetCommonCodes();

  const query = useQuery({
    queryKey: ["commonCodes"],
    queryFn: getCommonCodes,
  });

  const [indexes, setIndexes] = useState<string[]>([]);
  const [industries, setIndustries] = useState<string[]>([]);

  const codeRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (query.data) {
      const idx: string[] = [];
      const indus: string[] = [];

      query.data.forEach((c) => {
        if (c.parent === "IDX") {
          idx.push(c.name);
        } else if (c.parent === "INDUS") {
          indus.push(c.name);
        }
      });

      setIndexes(idx);
      setIndustries(indus);
    }
  }, [query.data]);

  const {
    register,
    handleSubmit,
    formState: { isSubmitted, errors },
  } = useForm<Stock>({
    mode: "onBlur",
    defaultValues: {
      code: "",
      index: "",
      industry: "",
      name: "",
    },
  });

  const onSubmit = (data: Stock) => {
    addStock(data).then((msg) => {
      if (messages["SUE"] === msg) {
        navigate("/settings/stock/list");
      } else {
        codeRef.current?.focus();
      }

      alert(msg);
    });
  };

  return (
    <>
      <h3>주식종목 등록</h3>
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
            maxLength={6}
            ref={(e) => {
              register("code").ref(e);
              codeRef.current = e;
            }}
          ></input>
        </div>
        <div>
          <label>지수 종류</label>
          <select {...register("index")}>
            {indexes.map((v, i) => {
              return (
                <option value={v} key={i}>
                  {v}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label>업종코드</label>
          <select {...register("industry")}>
            {industries.map((v, i) => {
              return (
                <option value={v} key={i}>
                  {v}
                </option>
              );
            })}
          </select>
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
        <button className="btn" type="submit" onClick={handleSubmit(onSubmit)}>
          등록
        </button>
      </form>
    </>
  );
}

export default StockAdd;
