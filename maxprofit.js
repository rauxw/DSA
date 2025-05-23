const stocks = [7, 1, 5, 3, 6, 4];

const maxProfit = (stocks) => {
  let minPrice = stocks[0];
  let maxProfit = 0;

  for (let i = 0; i < stocks.length; i++) {
    const currentPrice = stocks[i];
    minPrice = Math.min(minPrice, currentPrice);

    const potentialProfit = currentPrice - minPrice;
    maxProfit = Math.max(maxProfit, potentialProfit);

    console.log(maxProfit);
  }

  return maxProfit;
};

const price = maxProfit(stocks);
console.log("Maximum profit:", price);
