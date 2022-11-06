import create from "zustand/react";

interface Address {
  uf: string;
  address: string;
  complement?: string;
}

export interface IAddressStore {
  address: Address;
  setAddress: (address: Address) => void
}

export const addressStoreInitialState: Pick<IAddressStore, 'address'> = {
  address: {
    uf: '',
    address: ''
  }
}

export const useAddressStore = create<IAddressStore>(set => ({
  ...addressStoreInitialState,
  setAddress: (address) =>
    set({
      address,
    }),
}));