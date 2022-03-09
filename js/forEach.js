const skaiciaiArray = [5, 1, 2, 3];

function avgFor(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    const skaicius = arr[i];
    // console.log('element ===', element);
    total += skaicius;
  }
  return total / arr.length;
}

const avg1 = avgFor(skaiciaiArray);
console.log('avg1 ===', avg1);

// forEach - kazka atlikti su kiekviena reiksme
let total = 0;
// skaiciaiArray.forEach((skaicius) => {
//   console.log('skaicius ===', skaicius);
//   total += skaicius;
// });

// debugger;
skaiciaiArray.forEach(getTotal);

function getTotal(skaicius) {
  console.log('skaicius ===', skaicius);
  total += skaicius;
}

const avt2 = total / skaiciaiArray.length;
console.log('avg2 ===', avt2);

// console.log('forEachReturns ===', forEachReturns); // undefined

// forEach info
skaiciaiArray.forEach((sk, i, arr) => {
  console.log(`${i}tasis el, kurio reiksme yra ${sk}`);
  console.log('arr ===', arr);
});
// padvigubinti visas skaiciai masyvo reiksmes
skaiciaiArray.forEach((sk, i, arr) => {
  arr[i] = sk * 2;
});
console.log('skaiciaiArray ===', skaiciaiArray);
