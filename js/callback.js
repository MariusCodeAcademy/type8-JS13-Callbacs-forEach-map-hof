'use strict';
// call back

function multiply(sk1, sk2, callback) {
  const result = sk1 * sk2;
  // return result;
  callback(result);
}

function displayValue(val) {
  console.log(`The value is ${val}`);
}

function outHtmlValue(val) {
  // sukuria nauja p elmenta
  const pEl = document.createElement('p');
  // i jo vidu iraso 'The value is <val>'
  pEl.textContent = `The value is ${val}`;
  // pataltinam el body apacioje
  document.body.append(pEl);
}

// 10, 100
// const calcAmount = multiply(10, 100);
// displayValue(calcAmount);
// outHtmlValue(calcAmount);

// multiply(10, 100, outHtmlValue);
// arrow fn
multiply(10, 100, (val) => {
  console.log('val ===', val);
});
