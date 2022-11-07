import create from "zustand";

interface Address {
  uf: string;
  address: string;
  complement?: string;
}

export interface IAddressStore {
  address: Address | null;
  setAddress: (address: Address) => void
}

export const useAddressStore = create<IAddressStore>(set => ({
  address: null,
  setAddress: (address) =>
    set({
      address,
    }),
}));