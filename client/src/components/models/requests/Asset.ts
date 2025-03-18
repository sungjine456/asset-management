interface Asset {
  id: string;
  name: string;
  price: number;
  count: number;
}

const EmptyAsset: Asset = { id: "", name: "", price: 0, count: 0 };

export default Asset;
export { EmptyAsset };
