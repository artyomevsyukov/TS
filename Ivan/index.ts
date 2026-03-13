const electricityUserData = {
  readings: 95,
  units: 'kWt',
  mode: 'double',
};

const waterUserData = {
  readings: 3,
  units: 'm3',
};

const elRate: number = 0.45;
const wRate: number = 2;

const monthPayments: number[] = [0, 0]; // [electricity, water]

const calculatePayments = (
  { mode, readings }: { mode: string; readings: number },
  wData: { readings: number },
  elRate: number,
  wRate: number
) => {
  if (mode === 'double' && readings < 50) {
    monthPayments[0] = readings * elRate * 0.7;
  } else {
    monthPayments[0] = readings * elRate;
  }

  monthPayments[1] = wData.readings * wRate;
};

calculatePayments(electricityUserData, waterUserData, elRate, wRate);

const sendInvoice = (
  [el, water]: number[],
  electricityUserData: { mode: string; readings: number; units: string },
  waterUserData: { readings: number; units: string }
) => {
  const text = `    Hello!
    This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
    It will cost: ${el}€
    
    This month you used ${waterUserData.readings} ${waterUserData.units} of water
    It will cost: ${water}€`;

  return text;
};

console.log(sendInvoice(monthPayments, electricityUserData, waterUserData));

// const currRate = '1.05';

// const fetchCurr = (response: string): number => {
//   const data = JSON.parse(response);
//   return data;
// };

// function transferEurToUsd(available: Boolean, amount: number, commission: number) {
//   if (available) {
//     let res = fetchCurr(currRate) * amount * commission;
//     console.log(res);
//     // Или запись в элемент на странице вместо консоли
//   } else {
//     console.log('Сейчас обмен недоступен');
//   }
// }

// transferEurToUsd(true, 500, 1.05);
