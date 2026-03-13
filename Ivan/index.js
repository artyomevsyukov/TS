var electricityUserData = {
    readings: 95,
    units: 'kWt',
    mode: 'double',
};
var waterUserData = {
    readings: 3,
    units: 'm3',
};
var elRate = 0.45;
var wRate = 2;
var monthPayments = [0, 0]; // [electricity, water]
var calculatePayments = function (elData, wData, elRate, wRate) {
    if (elData.mode === 'double' && elData.readings < 50) {
        monthPayments[0] = elData.readings * elRate * 0.7;
    }
    else {
        monthPayments[0] = elData.readings * elRate;
    }
    monthPayments[1] = wData.readings * wRate;
};
calculatePayments(electricityUserData, waterUserData, elRate, wRate);
var sendInvoice = function (monthPayments, electricityUserData, waterUserData) {
    var text = "    Hello!\n    This month you used ".concat(electricityUserData.readings, " ").concat(electricityUserData.units, " of electricity\n    It will cost: ").concat(monthPayments[0], "\u20AC\n    \n    This month you used ").concat(waterUserData.readings, " ").concat(waterUserData.units, " of water\n    It will cost: ").concat(monthPayments[1], "\u20AC");
    return text;
};
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
