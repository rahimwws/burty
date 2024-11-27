import { UseMutateFunction } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export type ModalConfigType = {
  title: string;
  description: string;
  rightText: string;
  mutate: UseMutateFunction<AxiosResponse<any>, Error, void>;
};
