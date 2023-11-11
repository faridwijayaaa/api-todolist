"use strict";
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
     * }], {});
     */
    await queryInterface.bulkInsert("Todos", [
      {
        value: "HIT THE GYM",
        status: false,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: "HIT CARDIO 1HOUR 10 MINUTES",
        status: false,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]),
      {};
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
