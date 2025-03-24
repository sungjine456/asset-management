import Asset, { EmptyAsset } from "../components/models/requests/Asset";
import { get, getOrElse, isError, post } from "./AxiosWrapper";

export function useAddAsset(): (data: Asset) => Promise<boolean> {
  return (data: Asset) =>
    post<boolean>("/asset", data).then((res) => {
      return isError(res) ? false : res;
    });
}

export function useGetAsset(): (id: string) => Promise<Asset> {
  return (id: string) => getOrElse<Asset>(`/asset/${id}`, {}, EmptyAsset);
}
