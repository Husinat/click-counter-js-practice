let count = 0;  

let increaseBtn = document.getElementById('increaseBtn');
let resetBtn = document.getElementById('resetBtn');
let decreaseBtn = document.getElementById('decreaseBtn');
const counter = document.getElementById('counter')


increaseBtn.addEventListener('click', function(){
  count++
  counter.innerHTML = count;
  counter.style.color = 'green';
});

resetBtn.addEventListener('click', function(){
  count = 0;
    counter.innerHTML = count;
    counter.style.color = '#222';
})

decreaseBtn.addEventListener('click', function(){
     count--;
    counter.innerHTML = count;
    counter.style.color = 'red';
})
