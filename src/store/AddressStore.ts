import create from "zustand";
import { persist } from "zustand/middleware";
interface Address {
  uf: string;
  address: string;
  complement?: string;
}

export interface IAddressStore {
  address: Address | null;
  setAddress: (address: Address) => void
}

export const useAddressStore = create(
  persist<IAddressStore>(set => ({
    address: null,
    setAddress: (address) =>
      set({
        address,
      }),
  }),
    {
      name: 'address-store'
    }
  )
);