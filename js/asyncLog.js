// sync code
// console.log('log1');
// console.log('log2');
// console.log('log3');

console.log('log1');
// setTimeout(fn kuri vyks, po kiek milisekundziu)
setTimeout(kviesk, 2000);
function kviesk() {
  console.log('log2');
}

document.body.addEventListener('click', () => {});

console.log('log3');
