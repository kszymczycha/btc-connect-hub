interface UniSatWallet {
  address: string;
}

export const useUniSatWallet = () =>
  useState<UniSatWallet>("uniSatWallet", () => ({}));
