
let physics = document.getElementById('sub1');
let maths = document.getElementById('sub2');
let computing = document.getElementById('sub3');
let svgStart = document.getElementById('start');
let svgStop = document.getElementById('stop');


physics.addEventListener('mouseover',function(){
  console.log('yeet');
  svgStart.classList.remove('red-start');
  svgStop.classList.remove('red-end');
  svgStart.classList.remove('blue-start');
  svgStop.classList.remove('blue-end');
  svgStart.classList.add('green-start');
  svgStop.classList.add('green-end');
});

maths.addEventListener('mouseover',function(){
  console.log('yeet');
  svgStart.classList.remove('red-start');
  svgStop.classList.remove('red-end');
  svgStart.classList.remove('green-start');
  svgStop.classList.remove('green-end');
  svgStart.classList.add('blue-start');
  svgStop.classList.add('blue-end');
});

computing.addEventListener('mouseover',function(){
  console.log('yeet');
  svgStart.classList.remove('green-start');
  svgStop.classList.remove('green-end');
  svgStart.classList.remove('blue-start');
  svgStop.classList.remove('blue-end');
  svgStart.classList.add('red-start');
  svgStop.classList.add('red-end');
});
