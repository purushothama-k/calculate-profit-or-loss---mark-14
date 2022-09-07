'use strict';

const initialPriceEl = document.querySelector('.initial-price');
const qtyOfStocksEl = document.querySelector('.quantity-of-stocks');
const currentPriceEl = document.querySelector('.current-price');
const btnEl = document.querySelector('.btn');
const outputMsgEl = document.querySelector('.output-msg');

const finalCalculationsWithInputValues = function () {
  const initPrice = Number(initialPriceEl.value);
  const qtyStocks = Number(qtyOfStocksEl.value);
  const currentPrice = Number(currentPriceEl.value);

  calculateProfitAndLoss(initPrice, qtyStocks, currentPrice);
};

const calculateProfitAndLoss = function (initial, quantity, current) {
  if (
    initialPriceEl.value > 0 ||
    qtyOfStocksEl.value > 0 ||
    currentPriceEl.value > 0
  ) {
    if (initial > current) {
      //loss will be occured
      const lossOccured = (initial - current) * quantity;
      //added math.round to get the round values instead of decimals
      const lossPercentage = Math.round((lossOccured / initial) * 100);
      showmsg(
        `Hey! the loss is ${lossOccured} and the percentage is ${lossPercentage}%.`
      );
      // console.log(lossOccured, lossPercentage);
    } else if (current > initial) {
      //profit will be occured
      const profitOccured = (current - initial) * quantity;
      const profitPercentage = Math.round((profitOccured / current) * 100);
      showmsg(
        `Hey! the profit is ${profitOccured} and the percentage is ${profitPercentage}%.`
      );
      // console.log(profitOccured, profitPercentage);
    } else {
      showmsg(`Sorry! no growth this time🤔`);
    }
  }
};
const showmsg = function (msg) {
  outputMsgEl.textContent = msg;
};

btnEl.addEventListener('click', finalCalculationsWithInputValues);

btnEl.addEventListener('click', function () {
  if (
    Number(initialPriceEl.value) == 0 ||
    Number(qtyOfStocksEl.value) == 0 ||
    Number(currentPriceEl.value) == 0
  ) {
    outputMsgEl.textContent = 'Invalid input';
    console.log('Hello');
  } else {
    finalCalculationsWithInputValues();
  }
});
