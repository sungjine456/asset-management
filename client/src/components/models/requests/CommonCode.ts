interface CommonCode {
  code: string;
  parent: string;
  name: string;
}

const EmptyCommonCode: CommonCode = { code: "", parent: "", name: "" };

export default CommonCode;
export { EmptyCommonCode as EmptyCommon };
