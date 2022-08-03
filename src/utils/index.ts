import { IHistory } from "../types/ctyptoTypes";

export const createCoinPriceArray = (src: IHistory[]) => {
  if (src) {
    let coinPrice: string[] = [];
    const coinTimestamp = [];
    for (let i = 0; i < src.length; i++) {
      coinPrice.push(src[i].price);
      coinTimestamp.push(
        new Date(src[i].timestamp * 1000).toLocaleDateString()
      );
    }

    return [coinPrice, coinTimestamp];
  }
};
