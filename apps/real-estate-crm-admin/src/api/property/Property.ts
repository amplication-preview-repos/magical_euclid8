import { Appointment } from "../appointment/Appointment";

export type Property = {
  address: string | null;
  appointments?: Array<Appointment>;
  createdAt: Date;
  id: string;
  price: number | null;
  rooms: number | null;
  size: number | null;
  updatedAt: Date;
};
