"use strict";

(() => {
  document.addEventListener('DOMContentLoaded', () => {

    const $arena = document.querySelector('.arenas');

    const scorpion = {
      name: 'Scorpion',
      hp: 100,
      img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
      weapon: ['fist', 'foot', 'lightning'],
      attack: function () {
        console.log(`${this.name} Fight...`);
      },
    };

    const kitana = {
      name: 'Kitana',
      hp: 80,
      img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
      weapon: ['hand', 'revolver', 'minigun'],
      attack: function () {
        console.log(`${this.name} Fight...`);
      },
    };

    function createPlayer(player, playerNumber) {

      const $player = document.createElement('div');
      $player.classList.add(`player${playerNumber}`);
      const $progressbar = document.createElement('div');
      $progressbar.classList.add('progressbar');
      const $character = document.createElement('div');
      $character.classList.add('character');
      const $life = document.createElement('div');
      $life.classList.add('life');
      $life.style.width = player.hp + '%';
      const $name = document.createElement('div');
      $name.classList.add('name');
      $name.innerText = player.name;
      const $playerImg = document.createElement('img');
      $playerImg.setAttribute('src', player.img);

      $progressbar.appendChild($life);
      $progressbar.appendChild($name);
      $character.appendChild($playerImg);
      $player.appendChild($progressbar);
      $player.appendChild($character);
      $arena.appendChild($player);

      // return $player;

    };

    createPlayer(kitana, '1');
    createPlayer(scorpion, '2');

    // $arena.appendChild(createPlayer(kitana, '1'));
    // $arena.appendChild(createPlayer(scorpion, '2'));

  });
})();