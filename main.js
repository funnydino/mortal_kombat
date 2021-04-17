"use strict";

(() => {
  document.addEventListener('DOMContentLoaded', () => {

    const $arenas = document.querySelector('.arenas');
    const $randomButton = document.querySelector('.button');

    const player1 = {
      player: 1,
      name: 'Scorpion',
      hp: 100,
      img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
      weapon: ['fist', 'foot', 'lightning'],
      attack: function () {
        console.log(`${this.name} Fight...`);
      },
    };

    const player2 = {
      player: 2,
      name: 'Kitana',
      hp: 100,
      img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
      weapon: ['hand', 'revolver', 'minigun'],
      attack: function () {
        console.log(`${this.name} Fight...`);
      },
    };

    function createElement(tag, className) {
      const $tag = document.createElement(tag);
      if (className) {
        $tag.classList.add(className);
      };
      return $tag;
    };

    function createPlayer(playerObj) {

      const $player = createElement('div', `player${playerObj.player}`);
      const $progressbar = createElement('div', 'progressbar');
      const $character = createElement('div', 'character');
      const $life = createElement('div', 'life');
      const $name = createElement('div', 'name');
      const $img = createElement('img');

      $name.innerText = playerObj.name;
      $life.style.width = playerObj.hp + '%';
      $img.setAttribute('src', playerObj.img);

      $progressbar.appendChild($name);
      $progressbar.appendChild($life);
      $character.appendChild($img);
      $player.appendChild($progressbar);
      $player.appendChild($character);

      return $player;

    };

    function changeHP(player) {
      const $playerLife = document.querySelector(`.player${player.player} .life`);
      const damage = Math.ceil(Math.random() * 20);
      player.hp -= damage;
      $playerLife.style.width = player.hp + '%';
      console.log(`${player.name} получает ${damage} урона!`);

      if (player.hp < 0) {
        $playerLife.style.width = 0 + '%';
        player != player1 ? $arenas.appendChild(playerLose(player1.name)) :
          $arenas.appendChild(playerLose(player2.name));
        $randomButton.disabled = true;
      };
    };

    function playerLose(name) {
      const $loseTitle = createElement('div', 'loseTitle');
      $loseTitle.innerText = `${name} wins`;

      return $loseTitle;
    };

    $randomButton.addEventListener('click', () => {
      changeHP(player1);
      if (player1.hp > 0) {
        changeHP(player2);
      };
    });

    $arenas.appendChild(createPlayer(player1));
    $arenas.appendChild(createPlayer(player2));

  });
})();