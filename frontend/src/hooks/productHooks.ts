import { useQuery } from "@tanstack/react-query";
import apiClient from "../apiClient";
import { Product } from "../types/Product";

//rút gọn ko cần phải dùng usereducer,useeffect
export const useGetProductsQuery = () =>
    useQuery({
        queryKey: ["products"],
        queryFn: async () => (await apiClient.get<Product[]>("api/products")).data
    })

export const useGetProductDetailsBySlugQuery = (slug: string) =>
    useQuery({
        queryKey: ["products", slug],
        queryFn: async () => (await apiClient.get<Product>(`api/products/slug/${slug}`)).data
    })
