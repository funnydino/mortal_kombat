"use strict";

(() => {
  document.addEventListener('DOMContentLoaded', () => {

    console.log('Привет, Мир!');
    let x = 1;

    setTimeout(() => {
      console.log(x);
    }, 1000);

  });
})();