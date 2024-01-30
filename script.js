const numberCount = document.getElementById('number');
const decreasingNumber = document.getElementById('icon-one');
const increasingNumber = document.getElementById('icon-two');
let startingPoint = 0;

decreasingNumber.addEventListener('click', () => {
 startingPoint -= 1 ;
 numberCount.innerHTML = startingPoint;
 numberCount.style.fontSize = '6rem';
})

increasingNumber.addEventListener('click', () => {
    startingPoint += 1;
    numberCount.innerHTML = startingPoint;
    numberCount.style.fontSize = "6rem"
})