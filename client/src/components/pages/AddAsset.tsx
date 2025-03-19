import { useForm } from "react-hook-form";
import Asset from "../models/requests/Asset";
import { post } from "../../servicies/AxiosWrapper";

function AddAsset() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitted, errors },
  } = useForm<Asset>({
    mode: "onBlur",
    defaultValues: {
      id: "id for test",
      name: "",
      price: 0,
      count: 0,
    },
  });

  const onSubmit = (data: Asset) => {
    post<boolean>("/asset", data).then((res) => {
      console.log(res);
    });
  };

  return (
    <form>
      <div>
        <label>아이디</label>
        <input
          type="text"
          placeholder="아이디"
          aria-invalid={
            isSubmitted ? (errors.id ? "true" : "false") : undefined
          }
          {...register("id", {
            required: "아이디를 입력해주세요.",
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
      <div>
        <label>가격</label>
        <input
          type="text"
          placeholder="가격"
          aria-invalid={
            isSubmitted ? (errors.price ? "true" : "false") : undefined
          }
          {...register("price", {
            required: "가격을 입력해주세요.",
          })}
        ></input>
      </div>
      <div>
        <label>갯수</label>
        <input
          type="text"
          placeholder="갯수"
          aria-invalid={
            isSubmitted ? (errors.count ? "true" : "false") : undefined
          }
          {...register("count", {
            required: "가격을 입력해주세요.",
          })}
        ></input>
      </div>
      <button type="submit" onClick={handleSubmit(onSubmit)}>
        등록
      </button>
    </form>
  );
}

export default AddAsset;
