interface Stock {
  code: string;
  index: string;
  industry: string;
  name: string;
}

const EmptyStock: Stock = { code: "", index: "", industry: "", name: "" };

export default Stock;
export { EmptyStock };
