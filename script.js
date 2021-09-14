const numbers = document.querySelectorAll('h1');

// My variant(HTML need to have target in text content instead of data-target)

// numbers.forEach(number => {
//   counter(number);
// });

// function counter(element) {
//   let count = 0;
//   let divide = element.textContent;
//   const interval = setInterval(() => {
//     count += increaseValue(divide);
//     element.textContent = Math.floor(count);
//   }, 10);

//   setTimeout(() => {
//     clearInterval(interval);
//     element.textContent = divide;
//   }, 700);
// }

// function increaseValue(value) {
//   return value / 70;
// }

// Learning course variant

numbers.forEach(number => {
  let target = +number.getAttribute('data-target');
  let count = +0;
  console.log(typeof target + ' ' + target);

  const increaseCounter = () => {
    if (count < target) {
      count += Math.ceil(target / 150);
      number.textContent = count;
      setTimeout(increaseCounter, 1);
    } else {
      number.textContent = target;
    }
  };

  increaseCounter();
});
