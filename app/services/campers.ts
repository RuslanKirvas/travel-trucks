import { api } from "./api";
import { Camper, FetchCampersResponse } from "@/app/types/camper";

export const fetchCampers = async (params: {
  page?: number;
  perPage?: number;
  location?: string;
  form?: string;
  transmission?: string;
  engine?: string;
}) => {
  // Видаляємо параметри з порожніми значеннями
  const cleanParams = Object.fromEntries(
    Object.entries(params).filter(
      ([_, value]) => value !== "" && value !== undefined && value !== null,
    ),
  );

  const { data } = await api.get<FetchCampersResponse>("/campers", {
    params: cleanParams,
  });
  return data;
};

export const fetchCamperById = async (id: string) => {
  const { data } = await api.get<Camper>(`/campers/${id}`);
  return data;
};
