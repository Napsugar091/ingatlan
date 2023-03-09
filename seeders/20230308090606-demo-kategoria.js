'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         *}], {});
         */
        await queryInterface.bulkInsert('Kategoriak', [
            {nev: "Haz"},
            {nev: "Lakás"},
            {nev: "Építési telek"},
            {nev: "Garázs"},
            {nev: "Mezőgazdasági terület"},
            {nev: "Ipari ingatlan"}
        ], {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         *
         *
         */
        await queryInterface.bulkDelete('Kategoriak', null, {});
    }
};
