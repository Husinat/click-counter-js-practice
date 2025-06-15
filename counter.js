// JS for the first approach to the counter app


// let count = 0;
// let increaseBtn = document.getElementById('increase');
// let resetBtn = document.getElementById('reset');
// let decreaseBtn = document.getElementById('decrease');
// let counter = document.getElementById('counter');


// increaseBtn.addEventListener('click', function(){
//   count++
//   counter.innerHTML = count;
//   counter.style.color = 'green';
// });

// resetBtn.addEventListener('click', function(){
//   count = 0;
//     counter.innerHTML = count;
//     counter.style.color = '#222';
// })

// decreaseBtn.addEventListener('click', function(){
//      count--;
//     counter.innerHTML = count;
//     counter.style.color = 'red';
// })



// Second approach to the counter app using a single event listener
let count = 0;

const counter = document.getElementById('counter');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
  btn.addEventListener('click', function(e) {
    const styles = e.currentTarget.classList;

    if (styles.contains('increase')) {
      count++;
      counter.style.color = 'green';
    } else if (styles.contains('reset')) {
      count = 0;
      counter.style.color = '#222';
    } else if (styles.contains('decrease')) {
      count--;
      counter.style.color = 'red';
    }
    
counter.textContent = count;
  });
});
