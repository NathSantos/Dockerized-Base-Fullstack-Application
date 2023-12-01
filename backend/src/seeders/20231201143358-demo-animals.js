'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Animals', [
      {
        common_name: 'Dolphin',
        scientific_name: 'Delphinus delphis',
        life_expectancy: 25,
        habitat: 'Oceans',
      },
      {
        common_name: 'Sea Turtle',
        scientific_name: 'Chelonia mydas',
        life_expectancy: 80,
        habitat: 'Seas',
      },
      {
        common_name: 'Octopus',
        scientific_name: 'Octopus vulgaris',
        life_expectancy: 3,
        habitat: 'Coral Reefs',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Animals', null, {});
  },
};
