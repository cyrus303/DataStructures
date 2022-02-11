function maxProfit(price, n) {
  let profit = new Array(n);
  for (let i = 0; i < n; i++) {
    profit[i] = 0;
  }

  let max_price = price[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    if (price[i] > max_price) {
      max_price = price[i];
    }
    profit[i] = Math.max(profit[(i + 1, max_price - price[i])]);
  }
  let min_price = price[0];
  for (let i = 1; i < n; i++) {
    // min_price is minimum price
    // in price[0..i]
    if (price[i] < min_price) min_price = price[i];

    // Maximum profit is maximum of:
    // a) previous maximum, i.e., profit[i-1]
    // b) (Buy, Sell) at (min_price, price[i]) and add
    // profit of other trans. stored in profit[i]
    profit[i] = Math.max(profit[i - 1], profit[i] + (price[i] - min_price));
  }
  let result = profit[n - 1];

  return result;
}

let price = [2, 30, 15, 10, 8, 25, 80];
let n = price.length;
output = maxProfit(price, n);
console.log(output);
