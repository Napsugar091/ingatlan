'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('ingatlanok', [
      {
        "kategoria": 1,
        "leiras": "Kertvárosi részén, egyszintes házat kínálunk nyugodt környezetben, nagy telken.",
        "hirdetesDatuma": "2022-02-21",
        "tehermentes": true,
        "ar": 26990000,
        "kepUrl": "http://localhost:3000/adv01.jpg"
      },
      {
        "kategoria": 1,
        "leiras": "Belvárosi környezetben, árnyékos helyen kis méretú családi ház eladó. Tömegközlekedéssel könnyen megközelíthető.",
        "hirdetesDatuma": "2022-02-28",
        "tehermentes": true,
        "ar": 28990000,
        "kepUrl": "http://localhost:3000/adv02.jpg"
      },
      {
        "kategoria": 2,
        "leiras": "Kétszintes berendezett lakás a belvárosban kiadó.",
        "hirdetesDatuma": "2022-02-24",
        "tehermentes": true,
        "ar": 32000000,
        "kepUrl": "http://localhost:3000/adv03.jpg"
      },
      {
        "kategoria": 4,
        "leiras": "Nagy garázs kertvárosi környezetben kiadó",
        "hirdetesDatuma": "2022-02-26",
        "tehermentes": true,
        "ar": 5990000,
        "kepUrl": "http://localhost:3000/adv04.jpg"
      },
      {
        "kategoria": 5,
        "leiras": "10 hektáros mezőhazdasági terület eladó.",
        "hirdetesDatuma": "2022-03-18",
        "tehermentes": true,
        "ar": 79000000,
        "kepUrl": "http://localhost:3000/adv05.jpg"
      },
      {
        "kategoria": 6,
        "leiras": "Felújításra szoruló üzemcsarnok zöld környezetben áron alul eladó",
        "hirdetesDatuma": "2022-02-23",
        "tehermentes": false,
        "ar": 25000000,
        "kepUrl": "http://localhost:3000/adv06.jpg"
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('ingatlanok', null, {});
  }
};
