import { SortOrder } from "../../util/SortOrder";

export type PropertyOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  rooms?: SortOrder;
  size?: SortOrder;
  updatedAt?: SortOrder;
};
