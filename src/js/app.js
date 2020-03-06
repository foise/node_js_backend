'use strict';
function sayHi() {
  console.log('Hi,dear user!');
}
document.getElementsByClassName('btn')[0].addEventListener('click', sayHi);